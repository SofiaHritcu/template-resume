<template>
  <v-app>
    <router-view to="/login">Login</router-view>
    <Home />
    <Users />
    <router-view to="/users">Login</router-view>
  </v-app>
</template>

<script>
import Login from './views/Login.vue';
import Home from './views/Home.vue';
import Users from './views/Users.vue';

export default {
  components: { 
  Login,
  Home,
  Users  },
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
<style></style>
