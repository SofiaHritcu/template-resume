<template>
  <v-app>
    <router-view to="/login">Login</router-view>
    <Contact />
  </v-app>
</template>

<script>
import Login from './views/Login.vue';
import Contact from './views/Contact.vue'

export default {
  components: { Login,
  Contact },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
</style>
