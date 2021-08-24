<template>
  <v-app>
    <body>
      <div class="starts">
        <Resume></Resume>
      </div>
    </body>
  </v-app>
</template>

<script>
import Resume from "./views/Resume.vue";
export default {
  components: {
    Resume,
  },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style></style>
