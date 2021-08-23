<template>
  <div> 
        <v-container class="signup-form mb-6 my-10" align="center">
            <v-row class="text-center" justify="center">
                <p class="my-5 text-h4 font-weight-light">Let's find your account</p>
            </v-row>
            <v-row class="text-center" justify="center">
                <p class="my-2 text-overline font-weight-light">Complete the field and an e-mail will be sent to your adress for resetting the password !</p>
            </v-row>
            <v-row  class="text-center" justify="center">
                <form-forgot-password class="my-5" width="100%"></form-forgot-password>
            </v-row>
            <v-row no-gutters> 
            </v-row>
        </v-container>
    </div>
</template>

<script>
import FormForgotPassword from '../components/login/FormForgotPassword.vue'
import FormSignUp from '../components/signup/FormSignUp.vue'

export default {
    name: 'ForgotPassword',
    components: {
        FormSignUp,
        FormForgotPassword
    },
    methods: {
       
    }
}
</script>

<style>

</style>