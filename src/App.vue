<template>
  <v-app>
    <router-view to="/login">Login</router-view>
    <Home />
    <Projects/>
  </v-app>
</template>

<script>
import Login from './views/Login.vue';
import Home from './views/Home.vue';
import Projects from './views/Projects';

export default {
  components: { 
  Login,
  Projects,
  Home },
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
<style></style>
