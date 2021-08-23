<template>
  <v-form ref="resetPasswordForm" class="resetPassword">
    <v-snackbar v-model="snackbarPasswordReset" :timeout="4000" top color="#85a3e0">
      <span>Now you have a new password ! </span>
      <v-btn color="white" text @click="snackbarPasswordReset = false">Close</v-btn>
    </v-snackbar>
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
    <v-btn tile color="#85a3e0" @click="submitNewPassword">
      <v-icon left color="white">
        mdi-magnify
      </v-icon>
      Reset password
    </v-btn>
  </v-form>
</template>

<script>
import firebase from "firebase";
import db from "@/firebase/firebaseInit";
export default {
  data() {
    return {
        // data from user to use at submit
        password: '',
        confirmPassword: '',

        // data used in ui actions
        passwordShowing: true,
        snackbarPasswordReset: false,

        //user ID
        userID: "",

        // validation rules
        passwordRules : [
            p => !!p || 'type in your password',
            p => (p && p.length >= 6 && /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{6,}$/.test(p)) || 'minimum 6 characters, at least one uppercase letter, one lowercase letter and one number, at least one special character',
        ],
        confirmPasswordRules: [
            cp => !!cp || 'type confirm password',
            cp => cp === this.password || 'The password confirmation does not match.',
        ]
    };
  },
  methods: {
    submitNewPassword() {
      if (this.$refs.resetPasswordForm.validate()) {
        console.log("submiting password " + " " + this.password);
        // firebase
        //   .auth()
        //   .createUserWithEmailAndPassword(this.email, this.password)
        //   .then((data) => {
        //     data.user.sendEmailVerification();
        //     this.userID = data.user.uid;
        //     db.collection("users")
        //       .doc(this.userID)
        //       .set({
        //         firstName: this.firstName,
        //         lastName: this.lastName,
        //         email: this.email,
        //       })
        //       .then((this.snackbarEmailSent = true));
        //   });
        this.snackbarPasswordReset = true;
      }
    },
  },
};
</script>

<style>
.resetPassword {
    width: 60%;
}
</style>
