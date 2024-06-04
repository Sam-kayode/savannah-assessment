<template>
  <v-app>
    <v-main class="main-container px-5 px-sm-10">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
onMounted(async () => {

})
</script>

<style scoped lang="scss">
.main-container {
  padding: 0px 50px;
  background: url("https://images.unsplash.com/photo-1522030865324-4062412a2023?q=80&w=2888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
}
</style>