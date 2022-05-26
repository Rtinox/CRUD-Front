<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const activeTab = ref("HomeIndex");

const router = useRouter();

function changeRoute(newRoute: string)
{
  router.push({name: newRoute});
} 

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
  margin-top: 60px;
}
</style>
