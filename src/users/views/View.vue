<template>
    <form @submit="onSubmit">
        <Form :canEdit="canEdit" :data="data" />
        <o-button v-if="canEdit" native-type="submit" tag="input" variant="primary" />
        <div v-else>
            <o-button @click="$router.push({ name: 'UsersEdit', params: { id: id } })">Modifier</o-button>
            <o-button @click="deleteData(id)">Supprimer</o-button>
        </div>
    </form>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import Store from "../models/UsersStore";
import Form from "../components/Form.vue"
import { useDelete } from "../../core/delete";
import { computed } from "@vue/reactivity";

const props = defineProps({
    id: {
        type: String,
        required: false,
    },
})

const route = useRoute();
const router = useRouter();

const canEdit = computed(() => route.name !== "UsersView");

const data = ref({
    name: "",
    first_name: "",
    age: "",
    description: ""
});

function loadData() {
    if (props.id) {
        Store.read(props.id).then((json => {
            data.value = json;
        }))
    }
}

if(props.id) loadData();

function onSubmit(e: any) {
    e.preventDefault();

    if (props.id) {
        Store.update(props.id, data.value).then(r => r.json())
            .then(json => {
                router.push({ name: "UsersView", params: { id: json._id } });
                loadData();
            })
    }
    else {
        Store.create(data.value)
            .then(r => r.json())
            .then(json => {
                router.push({ name: "UsersView", params: { id: json._id } });
                loadData();
            })
    }
}

const { deleteData } = useDelete(Store, () => { router.push({ name: "UsersIndex" }) })

</script>