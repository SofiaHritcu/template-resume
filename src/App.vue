<template>
  <v-app>
    <AddResume></AddResume>
  </v-app>
</template>

<script>
import AddResume from "./views/AddResume.vue";
import Resume from "./views/Resume.vue";
export default {
  components: {
    AddResume,
    Resume,
  },
  name: "App",
  data: () => ({
    //
  }),
};
</script>
<style></style>
