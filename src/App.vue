<template>
  <v-app>
    <div>
      <Home />
    </div>
  </v-app>
</template>

<script>

import Home from './views/Home.vue'


export default {
  name: 'App',

  components:{
    Home,
  },
  data: () => ({
    //
  }),
};
</script>
