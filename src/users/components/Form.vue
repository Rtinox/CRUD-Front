<script lang="ts" setup>
  const props = defineProps({
    canEdit: {
      type: Boolean,
      required: false,
      default: true
    },
    data: {
      type: Object,
      required: true
    }
  })
</script>

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
