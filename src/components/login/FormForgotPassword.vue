<template>
  <v-form ref="forgetPasswordForm" class="forgetPassword">
    <v-snackbar v-model="snackbarEmailSent" :timeout="4000" top color="#85a3e0">
      <span>Check your e-mail ! </span>
      <v-btn color="white" text @click="snackbarEmailSent = false">Close</v-btn>
    </v-snackbar>
    <v-text-field
      v-model="email"
      label="email"
      placeholder="jake@gmail.com"
      :rules="emailRules"
      color="light-blue darken-4"
      class="my-4 mx-5"
    >
    </v-text-field>
    <v-btn tile color="#85a3e0" @click="submitEmail">
      <v-icon left color="white">
        mdi-magnify
      </v-icon>
      Find my account
    </v-btn>
  </v-form>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      // data from user to use at submit
      email: "",

      // data used in ui actions
      snackbarEmailSent: false,

      //user ID
      userID: "",

      // validation rules
      emailRules: [
        (e) =>
          /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]+$/.test(e) ||
          "email must have a valid format",
      ]
    };
  },
  methods: {
    loginRedirect() {
      this.$router.push('login');
    },

    submitEmail() {
      if (this.$refs.forgetPasswordForm.validate()) {
        firebase.auth().sendPasswordResetEmail(this.email)
        .then(() => {
            this.snackbarEmailSent = true
            setTimeout(() => {
              this.loginRedirect();
            }, 4000);
        })
      }
    },
  },
};
</script>

<style>
.forgetPassword {
    width: 70%;
}
</style>
