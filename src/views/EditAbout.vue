<template>
  <v-row>
    <v-col cols="0" md="4" lg="3">
      <navbar :onEditAbout="true"></navbar>
    </v-col>
    <v-col cols="12" md="8" lg="9"  align="center" justify="center">
        <v-container>
            <v-row class="text-center" justify="center">
                <p class="my-5 pt-4 pt-md-0 text-h4 font-weight-light">Edit your portfolio</p>
            </v-row>
            <v-row class="text-center" justify="center">
                <p class="my-2 text-overline font-weight-light">
                  Here you can change the information that appears on your 
                  <span class="text-overline font-weight-normal"  style="color: #3366cc">"ABOUT ME"</span> 
                  page on your portfolio
                </p>
                <p class="my-2 text-overline font-weight-light"> 
                  Good luck with building an impressive 
                  <span class="text-overline font-weight-normal"  style="color: #3366cc">"ABOUT ME"</span> 
                </p>
            </v-row>
            <v-row  class="text-center form-settings" justify="center">
                <form-edit-about class="my-5"></form-edit-about>
            </v-row>
            <v-row no-gutters> 
            </v-row>
        </v-container>
    </v-col>
  </v-row>
</template>

<script>
import FormEditAbout from '../components/edit/FormEditAbout.vue'
import Navbar from '../components/Navbar.vue'

export default {
  components: { Navbar, FormEditAbout },
    name: 'EditAbout',
}
</script>

<style>
.form-settings {
    width: 70%;
}
.v-slide-group__content{
  overflow-y: auto !important;
}
</style>