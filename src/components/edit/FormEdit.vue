<template>
  <v-form ref="portfolioUpdateForm">
    
    
  </v-form>
</template>

<script>
import image from "../../assets/account.png";
import firebase from "firebase";
import db from "@/firebase/firebaseInit";

export default {
  data() {
    return {
        // data from user to use at submit
        userID: "",
        
    };
  },
  computed: {
    isLoggedIn() {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          return false;
        } else {
          this.userID = user.uid;
          this.fetchCurrentUserData();
          return true;
        }
      });
    },
  },
  methods: {
    loginRedirect() {
      this.$router.push("/login");
    },

    fetchCurrentUserData() {
    
    },
  },

  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        return false;
      } else {
        this.userID = user.uid;
        this.fetchCurrentUserData();
        return true;
      }
    });
  },
};
</script>

<style scoped>
.classic-button:hover {
  background-color: #3366cc !important;
}
.theme--light.v-input input,
.theme--light.v-input textarea {
  color: #3366cc !important;
}
.avatarProfile {
    border: 2px solid #3366cc;
    box-shadow: 0px 0px 0px 8px rgba(214, 224, 245, 1); 
}
.profile-input {
    width: 10% !important;
    margin-left: 48%;
}
</style>
