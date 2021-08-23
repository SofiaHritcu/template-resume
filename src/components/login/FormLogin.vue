<template>
    <v-form ref="userLoginForm">
         <v-snackbar v-model="snackbarEmailNotVerified" :timeout="4000" top color="orange">
            <span>Please verify your email address!</span>
            <v-btn color="white" text @click="snackbarEmailNotVerified = false">Close</v-btn>
        </v-snackbar>
        <v-snackbar v-model="snackbarUserNotFound" :timeout="4000" top color="red">
            <span>The email you entered isn't connected to an account.</span>
            <v-btn color="white" text @click="snackbarUserNotFound = false">Close</v-btn>
        </v-snackbar>
        <v-text-field 
                v-model="email" 
                label="email" 
                placeholder="jake@gmail.com"
                :rules="emailRules"
                color="light-blue darken-4"
                class="my-4 ml-2">
        </v-text-field>
        <v-text-field
            :type="passwordShowing ? 'password' : 'text'"
            v-model="password" 
            label="password" 
            :rules="passwordRules"
            color="light-blue darken-4"
            class="my-4 ml-2"
            :append-icon="passwordShowing ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
            @click:append="() => (passwordShowing = !passwordShowing)"
            autocomplete="off"
        ></v-text-field>
        <v-btn
            tile
            color="#85a3e0"
            @click="login"
        >
            <v-icon left color="white">
                mdi-lock-open-check-outline
            </v-icon>
            Login
        </v-btn>
    </v-form>
</template>

<script>
import firebase from 'firebase'
export default {
    data() {
        return {
            // data from user to use at logging in
            email: '',
            password: '',

            // snackbars
            snackbarEmailNotVerified: false,
            snackbarUserNotFound: false,

            // data used in ui actions
            passwordShowing: true,

            // validation rules
            emailRules : [
                e => !!e || 'type in your email'
            ],
            passwordRules : [
                p => !!p || 'type in your password',
            ],
        };
    },
    methods: {
        login() {
            if(this.$refs.userLoginForm.validate()) {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(authUser => {
                    if(authUser.user.emailVerified){
                        console.log('email is verified')
                        this.$router.push('/')
                    }
                    else {
                        this.snackbarEmailNotVerified = true
                    }
                })
                .catch(t => {
                    if(t.code == 'auth/user-not-found'){
                        this.snackbarUserNotFound = true
                    }
                })
            }
        }
    }
}
</script>

<style>

</style>