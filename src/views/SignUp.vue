<template>
    <div> 
        <v-container class="signup-form mb-6 my-10" align="center">
            <v-row class="text-center" justify="center">
                <p class="my-5 text-h4 font-weight-light">Sign Up into our app!</p>
            </v-row>
            <v-row class="text-center" justify="center">
                <p class="my-2 text-overline font-weight-light">Complete the required fields in order to create an account</p>
            </v-row>
            <v-row  class="text-center" justify="center">
                <form-sign-up class="my-5"></form-sign-up>
            </v-row>
            <v-row no-gutters> 
            </v-row>
        </v-container>
    </div>

</template>

<script>
import FormSignUp from '../components/signup/FormSignUp.vue'
export default {
    name: 'SignUp',



    components: {
        FormSignUp
    },
    methods: {
       
    }
}
</script>
    
<style>
.p{
    font: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.signup-form {
    background-color: #d6e0f5 !important;
}
</style>