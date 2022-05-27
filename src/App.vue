<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

/**
 * Tab actif de la barre de navigation
 */
const activeTab = ref("HomeIndex");

/**
 * Import du router depuis VueJS
 */
const router = useRouter();

/**
 * Lors du changement de page depuis la barre de navigation
 * @param newRoute 
 */
function changeRoute(newRoute: string)
{
  router.push({name: newRoute});
} 

/**
 * Au changement du Tab actif
 */
watch(activeTab, changeRoute)
</script>

<template>
  <o-tabs v-model="activeTab">
    <o-tab-item label="Accueil" value="HomeIndex" />
    <o-tab-item label="Utilisateurs" value="UsersIndex" />
  </o-tabs>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 1rem;
}
</style>
