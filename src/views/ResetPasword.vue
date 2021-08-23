<template>
  <div> 
        <v-container class="signup-form mb-6 my-10" align="center">
            <v-row class="text-center" justify="center">
                <p class="my-5 text-h4 font-weight-light">We'll set up your password again</p>
            </v-row>
            <v-row class="text-center" justify="center">
                <p class="my-2 text-overline font-weight-light">Complete the fields and the password will be updated!</p>
            </v-row>
            <v-row  class="text-center" justify="center">
                <form-reset-password class="my-5" width="100%"></form-reset-password>
            </v-row>
            <v-row no-gutters> 
            </v-row>
        </v-container>
    </div>
</template>

<script>
import FormResetPassword from '../components/login/FormResetPassword.vue'

export default {
    name: 'ForgotPassword',
    components: {
        FormResetPassword
    },
    methods: {
       
    }
}
</script>

<style>

</style>