<template>
  <o-button @click="$router.push({name: 'UsersCreate'})">Ajouter un utilisateur</o-button>
  <o-table :data="data" paginated :perPage="10" :loading="loading">
    <o-table-column field="_id" label="ID" v-slot="props">
      <router-link :to="{ name: 'UsersView', params: { id: props.row._id } }">{{ props.row._id }}</router-link>
    </o-table-column>

    <o-table-column field="name" label="Nom" searchable sortable v-slot="props">
      {{ props.row.name }}
    </o-table-column>

    <o-table-column field="first_name" label="Prénom" searchable sortable v-slot="props">
      {{ props.row.first_name }}
    </o-table-column>

    <o-table-column field="age" label="Age" numeric searchable sortable v-slot="props">
      {{ props.row.age }}
    </o-table-column>

    <o-table-column field="description" label="Description" searchable sortable v-slot="props">
      {{ props.row.description }}
    </o-table-column>

    <o-table-column field="actions" label="Actions" v-slot="props">
      <div class="is-flex">
        <o-button icon-left="eye" title="Voir"
          @click="$router.push({ name: 'UsersView', params: { id: props.row._id } })" />
        <o-button icon-left="pencil" title="Modifier"
          @click="$router.push({ name: 'UsersEdit', params: { id: props.row._id } })" />
        <o-button icon-left="delete" title="Supprimer" @click="deleteData(props.row._id)" />
      </div>
    </o-table-column>
  </o-table>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Store from "../models/UsersStore"
import { useDelete } from "../../core/delete";

const loading = ref(false);

const data = ref([]);

function loadData() {
  loading.value = true;
  Store.retrieve()
    .then(json => {
      console.log(json)
      data.value = json;
    })
    .finally(() => {
      loading.value = false;
    })
}
loadData();

const { deleteData } = useDelete(Store, loadData);
</script>
