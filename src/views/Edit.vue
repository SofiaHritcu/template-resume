<template>
  <v-row>
    <v-col cols="2">
      <navbar :onEditPortfolio="true"></navbar>
    </v-col>
    <v-col cols="10"  align="center" justify="center">
        <v-container>
            <v-row class="text-center" justify="center">
                <p class="my-5 text-h4 font-weight-light">Edit your portfolio</p>
            </v-row>
            <v-row class="text-center" justify="center">
                <p class="my-2 text-overline font-weight-light">Here you can change the information that appears on your portfolio</p>
                <p class="my-2 text-overline font-weight-light"> Good luck with building an impressive one!</p>
            </v-row>
            <v-row  class="text-center form-settings" justify="center">
                <form-edit class="my-5"></form-edit>
            </v-row>
            <v-row no-gutters> 
            </v-row>
        </v-container>
    </v-col>
  </v-row>
</template>

<script>
import FormEdit from '../components/edit/FormEdit.vue'
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar, FormEdit },
    name: 'Edit',
}
</script>

<style>
.form-settings {
    width: 70%;
}
</style>