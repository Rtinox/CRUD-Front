<template>
  <o-field label="Nom" horizontal>
    <o-input :disabled="!canEdit" v-model="data.name" />
  </o-field>

  <o-field label="Prénom" horizontal>
    <o-input :disabled="!canEdit" v-model="data.first_name" />
  </o-field>
  
  <o-field label="Age" horizontal>
    <o-input type="number" :disabled="!canEdit" v-model="data.age" />
  </o-field>
  
  <o-field label="Description" horizontal>
    <o-input type="textarea" :disabled="!canEdit" v-model="data.description" />
  </o-field>
</template>

<script lang="ts" setup>
  const props = defineProps({
    /**
     * Le formulaire peut-il être modifié ?
     */
    canEdit: {
      type: Boolean,
      required: false,
      default: true
    },
    /**
     * Données par défaut et modifié par le formulaire
     */
    data: {
      type: Object,
      required: true
    }
  })
</script>
