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
                <p class="my-2 text-overline font-weight-light">
                  Here you can change the information that appears on your 
                  <span class="text-overline font-weight-normal"  style="color: #3366cc">"PORTFOLIO"</span> 
                  page on your portfolio
                </p>
                <p class="my-2 text-overline font-weight-light"> 
                  Good luck with building an impressive 
                  <span class="text-overline font-weight-normal"  style="color: #3366cc">"PORTFOLIO"</span> 
                </p>
            </v-row>
            <v-row  class="text-center form-settings" justify="center">
                <form-edit-portfolio class="my-5"></form-edit-portfolio>
            </v-row>
            <v-row no-gutters> 
            </v-row>
        </v-container>
    </v-col>
  </v-row>
</template>

<script>
import FormEditPortfolio from '../components/edit/FormEditPortfolio.vue'
import Navbar from '../components/Navbar.vue'

export default {
  components: { Navbar, FormEditPortfolio },
    name: 'EditPortfolio',
}
</script>

<style>
.form-settings {
    width: 70%;
}
</style>