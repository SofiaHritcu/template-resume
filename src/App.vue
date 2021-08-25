<template>
  <v-app>
    <router-view to="/login">Login</router-view>
    <Home />
  </v-app>
</template>

<script>
import Login from './views/Login.vue';
import Home from './views/Home.vue'

export default {
  components: { 
  Login,
  Home },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
</style>
