<template>
    <v-form ref="userSignUpForm">
        <v-snackbar v-model="snackbarUserAdded" :timeout="3000" top color="#85a3e0">
            <span>Awesome! You are now signed up!</span>
            <v-btn color="white" text @click="snackbarUserAdded = false">Close</v-btn>
        </v-snackbar>
        <v-row>
            <v-text-field
                v-model="firstName"
                placeholder="eg. Andrew"
                :rules="nameRules"
                label="first name"
                color="light-blue darken-4"
                class="mx-2"                
            ></v-text-field>
            <v-text-field
                v-model="lastName"
                placeholder="eg. Evans"
                :rules="nameRules"
                label="last name"
                color="light-blue darken-4"
                class="mx-2"                
            ></v-text-field>
        </v-row>
        <v-text-field 
                v-model="email" 
                label="email" 
                placeholder="jake@gmail.com"
                :rules="emailRules"
                color="light-blue darken-4"
                class="my-4 mx-5">
        </v-text-field>
        <v-text-field
            :type="passwordShowing ? 'password' : 'text'"
            v-model="password" 
            label="password" 
            :rules="passwordRules"
            color="light-blue darken-4"
            class="my-4 mx-5"
            :append-icon="passwordShowing ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
            @click:append="() => (passwordShowing = !passwordShowing)"
            autocomplete="off"
        ></v-text-field>
        <v-text-field
            :type="passwordShowing ? 'password' : 'text'"
            v-model="confirmPassword" 
            label="confirm password" 
            :rules="confirmPasswordRules"
            color="light-blue darken-4"
            class="my-4 mx-5"
            :append-icon="passwordShowing ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
            @click:append="() => (passwordShowing = !passwordShowing)"
            autocomplete="off"
        ></v-text-field>
        <v-btn
            tile
            color="#85a3e0"
            @click="submitSignUpForm"
        >
            <v-icon left color="white">
                mdi-account-check-outline
            </v-icon>
            Sign Me Up
        </v-btn>
    </v-form>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/firebaseInit'
export default {
    data() {
        return {
            // data from user to use at submit
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',

            // data used in ui actions
            passwordShowing: true,
            snackbarUserAdded: false,

            //user ID
            userID : '',

            // validation rules
            nameRules : [
                n => !!n || 'this field is required',
            ],
            emailRules : [
                e => /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]+$/.test(e) || 'email must have a valid format'
            ],
            passwordRules : [
                p => !!p || 'type in your password',
                p => (p && p.length >= 6 && /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{6,}$/.test(p)) || 'minimum 6 characters, at least one uppercase letter, one lowercase letter and one number, at least one special character',
            ],
            confirmPasswordRules: [
                cp => !!cp || 'type confirm password',
                cp => cp === this.password || 'The password confirmation does not match.',
            ],
        };
    },
    methods: {
        loginRedirect() {
            this.$router.push('/login');
         },

        submitSignUpForm() {
            if(this.$refs.userSignUpForm.validate()) {
                console.log('submiting sign up user' + ' '
                + this.firstName + ' ' + this.lastName+' ' 
                + this.email + ' ' + this.password);
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .then(data => {
                        data.user.sendEmailVerification();
                        this.userID = data.user.uid;
                        db.collection('users').doc(this.userID).set({
                            firstName: this.firstName,
                            lastName: this.lastName,
                            email: this.email
                        }).then(() => {
                            this.snackbarUserAdded = true
                            setTimeout(() => {
                                this.loginRedirect();
                            }, 3000);
                        })
                    })
            }
        }
    }
}
</script>

<style>

</style>