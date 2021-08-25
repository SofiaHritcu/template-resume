<template>
  <v-row>
    <v-col cols="2">
        <navbar :onEditProfile="true"></navbar>
    </v-col>
    <v-col cols="10" align="center" justify="center">
        <v-container>
            <v-row class="text-center" justify="center">
                <p class="my-5 text-h4 font-weight-light">Edit your account</p>
            </v-row>
            <v-row class="text-center" justify="center">
                <p class="my-2 text-overline font-weight-light">Modify here your profile information</p>
            </v-row>
            <v-row  class="text-center form-settings" justify="center">
                <form-settings class="my-5"></form-settings>
            </v-row>
            <v-row no-gutters> 
            </v-row>
        </v-container>
    </v-col>
  </v-row>
</template>

<script>
import FormSettings from '../components/edit/FormSettings.vue'
import Navbar from '../components/Navbar.vue'

export default {
  components: { Navbar, FormSettings },
    name: 'Settings',
}
</script>

<style>
.form-settings {
    width: 70%;
}
</style>