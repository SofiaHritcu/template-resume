<template>
<v-row>
  <v-col cols="2">
    <navbar></navbar>
  </v-col>
  <v-col cols="10">
  </v-col>
</v-row>
</template>

<script>

import Navbar from '../components/Navbar.vue'
import firebase from "firebase";
import db from "@/firebase/firebaseInit";

  export default {
    name: 'Others',

    data() {
        return {
            users: [],
        };
    },

    components: {
        Navbar
    },
    mounted() {
        db.collection("users").get().then(async (usersFetched) => {
            usersFetched.forEach( async (userFetched) => {
                var firstName = userFetched.data().firstName;
                var lastName = userFetched.data().lastName;
                var uid = userFetched.id;
                var profileImage = await  firebase
                                    .storage()
                                    .ref(`profilePictures/${uid}.jpg`)
                                    .getDownloadURL();
                var portfolioFetched = await db.collection("portofolios").doc(uid).get();
                var role = '';
                if (portfolioFetched.data() !== undefined) {
                    role = portfolioFetched.data().role;
                };
                this.users.push({ 
                    firstName: firstName, 
                    lastName: lastName, 
                    role: role, 
                    uid: uid, 
                    image: profileImage
                    }, 
                );
            });
        });
    }
  }
</script>
