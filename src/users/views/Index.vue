<template>
  <o-table :data="data" paginated :perPage="10" :loading="loading">
    <o-table-column field="_id" label="ID" v-slot="props">
      <router-link :to="{name: 'UsersView', params: { id:  props.row._id }}">{{ props.row._id }}</router-link>
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
      {{ props.row.description }}
    </o-table-column>
  </o-table>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const loading = ref(false);

const data = ref([]);

loading.value = true;
fetch(`${import.meta.env.VITE_API_URL}/users`)
  .then(response => response.json())
  .then(json => {
    data.value = json;
  })
  .finally(() => {
    loading.value = false;
  })
</script>
