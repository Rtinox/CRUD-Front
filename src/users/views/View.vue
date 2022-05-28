<template>
    <form @submit="onSubmit">
        <Form :canEdit="canEdit" :data="data" />
        
        <o-button @click="$router.go(-1);">Retour</o-button>
        <span v-if="canEdit">
            <o-button native-type="submit" tag="input" variant="primary" />
        </span>
        <span v-else>
            <o-button @click="$router.push({ name: 'UsersEdit', params: { id: id } })">Modifier</o-button>
            <o-button variant="danger" @click="deleteData(id)">Supprimer</o-button>
        </span>
    </form>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import Store from "../models/UsersStore";
import Form from "../components/Form.vue"
import { useDelete } from "../../core/delete";
import { computed } from "@vue/reactivity";

/**
 * Page de création, modification et lecture de l'utilisateur
 */

const props = defineProps({
    /**
     * L'id de l'utilisateur à lire/modifier
     * Pas d'id si on le créer
     */
    id: {
        type: String,
        required: false,
    },
})

/**
 * Import de route et router de VueJS
 */
const route = useRoute();
const router = useRouter();

/**
 * Peut éditer si la route n'est pas la lecture de l'utilisateur
 */
const canEdit = computed(() => route.name !== "UsersView");

/**
 * Données d'un utilisateur de base
 */
const data = ref({
    name: "",
    first_name: "",
    age: "",
    description: ""
});

/** 
 * Récupération des données de l'utilisateur si l'id est donné (Pas en mode création)
 */
function loadData() {
    if (props.id) {
        Store.read(props.id).then((json => {
            data.value = json;
        }))
    }
}

loadData();

/**
 * Lors de la validation du formulaire
 * @param e 
 */
function onSubmit(e: any) {
    e.preventDefault();

    /**
     * Si c'est l'édition d'un utilisateur
     */
    if (props.id) {
        Store.update(props.id, data.value).then(r => {
                if(r) return r.json()
            })
            .then((json: any) => {
                router.replace({ name: "UsersView", params: { id: json._id } });
                loadData();
            })
    }
    else {
        /**
         * Si c'est la création d'un utilisateur
         */
        Store.create(data.value)
            .then(r => {
                if(r) return r.json()
            })
            .then((json: any) => {
                router.replace({ name: "UsersView", params: { id: json._id } });
                loadData();
            })
    }
}

/**
 * Import du composable de suppressiosn
 */
const { deleteData } = useDelete(Store, () => { router.push({ name: "UsersIndex" }) })

</script>
