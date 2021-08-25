<template>
  <div>
    <reset-pasword v-if="isResetPassword"> </reset-pasword>
    <email-verification v-if="isConfirmEmail"> </email-verification>
  </div>
</template>
<script>
import ResetPasword from "./ResetPasword.vue";
import EmailVerification from "./EmailVerification.vue";
import firebase from "firebase";
export default {
  components: { ResetPasword, EmailVerification },
  name: "UserManagement",
  data() {
    return {
      isResetPassword: false,
      isConfirmEmail: false,
    };
  },

  created() {
    this.handleUserManagement(
      firebase.auth(),
      this.getParameterByName("oobCode"),
      this.getParameterByName("mode")
    );
  },
  methods: {
    loginRedirect() {
      this.$router.push('/login');
    },

    getParameterByName(name) {
      name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
      var regexS = "[\\?&]" + name + "=([^&#]*)";
      var regex = new RegExp(regexS);
      var results = regex.exec(window.location.href);
      if (results == null) return "";
      else return decodeURIComponent(results[1].replace(/\+/g, " "));
    },

    handleUserManagement(auth, actionCode, mode) {
      switch (mode) {
        case "resetPassword":
          this.handleResetPassword(actionCode);
          break;
        case "verifyEmail":
          this.handleVerifyEmail(auth, actionCode);
        default:
          break;
      }
    },

    handleVerifyEmail(auth, actionCode) {
      auth
        .applyActionCode(actionCode)
        .then(() => {
          this.isConfirmEmail = true;
          setTimeout(() =>{
              this.loginRedirect();
          }, 3000)
        })
        .catch((error) => {
          //TO DO
        });
    },

    handleResetPassword(actionCode) {
      this.isResetPassword = true;
      if (this.$refs.resetPasswordForm.validate()) {
        var newPassword = this.password;
        var actionCode = this.getParameterByName("oobCode");
        firebase
          .auth()
          .verifyPasswordResetCode(actionCode)
          .then(() => {
            firebase
              .auth()
              .confirmPasswordReset(actionCode, newPassword)
              .then(() => {
                this.snackbarPasswordReset = true;
                setTimeout(() => {
                  this.loginRedirect();
                }, 3000);
              })
              .catch(() => {
                this.snackbarPasswordResetUnknownError = true;
              });
          })
          .catch(() => {
            this.snackbarPasswordResetInvalidLink = true;
          });
      }
    },
  },
};
</script>
