<template>
  <v-app>
    <router-view to="/login">Login</router-view>
  </v-app>
</template>

<script>
import Login from './views/Login.vue';

export default {
  components: { Login },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
</style>
