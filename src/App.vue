<template>
  <v-app>
    <router-view to="/login">Login</router-view>
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
<style></style>
