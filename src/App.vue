<template>
  <v-app>
    <div class="starts fixed-top">
      <Navbar></Navbar>
    </div>
  </v-app>
</template>

<script>
import Navbar from "./views/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
