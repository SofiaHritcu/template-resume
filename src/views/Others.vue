<template>
  <v-row>
    <v-col cols="2">
      <navbar></navbar>
    </v-col>
    <v-col cols="10">
      <users-introduction></users-introduction>
      <div class="container our-services">
        <v-row align="center" justify="center" class="ml-13">
          <users-cards
            v-for="user in users"
            :role="user.role"
            :image="user.image"
            :name="user.firstName + ' ' + user.lastName"
            :userID="user.uid"
          />
        </v-row>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import firebase from "firebase";
import db from "@/firebase/firebaseInit";
import UsersIntroduction from "../components/users/usersIntroduction.vue";
import UsersCards from "../components/users/usersCards.vue";

export default {
  name: "Others",

  data() {
    return {
      userID: "",
      users: [],
    };
  },

  components: {
    Navbar,
    UsersIntroduction,
    UsersCards,
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
    db.collection("users")
      .get()
      .then(async (usersFetched) => {
        usersFetched.forEach(async (userFetched) => {
          if(userFetched.id !== this.userID){
            var firstName = userFetched.data().firstName;
            var lastName = userFetched.data().lastName;
            var uid = userFetched.id;
            var profileImage = await firebase
              .storage()
              .ref(`profilePictures/${uid}.jpg`)
              .getDownloadURL();
            var portfolioFetched = await db
              .collection("portofolios")
              .doc(uid)
              .get();
            var role = "";
            if (portfolioFetched.data() !== undefined) {
              role = portfolioFetched.data().role;
            }
            this.users.push({
              firstName: firstName,
              lastName: lastName,
              role: role,
              uid: uid,
              image: profileImage,
            });
          }
        });
      });
  },
};
</script>
