<template>
  <v-row>
    <v-col cols="3">
      <navbar :onAbout="true"></navbar>
    </v-col>
    <v-col cols="9">
      <Home_introduction_section :picture_user="pictureLink" :firstName="firstName"
       :lastName="lastName" :job_name="role" :job_description="roleDescription" :skillsDescription="skillDescription"/>
      <Home_slider_projects project_name="Proiectul NO1" project_description="Cel mai smecher proiect ever"/>
      <Home_learning learning_name="CSS" learning_image="css.png"/>
    </v-col>
  </v-row>
</template>

<script>

import Home_introduction_section from '../../src/components/home/home-introduction-section.vue'
import Home_technologies from '../../src/components/home/home-technologies.vue'
import Home_slider_projects from '../../src/components/home/home-slider-projects'
import Home_learning from '../../src/components/home/home-learning.vue'
import Navbar from '../components/Navbar.vue'
import firebase from "firebase";
import db from "@/firebase/firebaseInit";

  export default {
    name: 'Home',

    components: {
    Home_introduction_section,
    Home_technologies,
    Home_slider_projects,
    Home_learning,
        Navbar,
    },

    data() {
      return {
        userID: '',
        firstName: '',
        lastName: '',
        pictureLink: '',
        role: '',
        roleDescription: '',
        skillDescription: '',
      }
    },

    created() {
      this.getAllData();
    },

    methods: {
      loginRedirect() {
        this.$router.push("/login");
      },

      async getAllData() {   
        await this.getUserID();
        await this.fetchUserData();
        this.fetchPortofolioData();
      },

     getUserID() { //trebuie modificata putin functia asta!!
       firebase.auth().onAuthStateChanged(user => {
         this.userID = user.uid;
       })  
      },

      async fetchUserData() {
        var docRef = db.collection('users').doc(this.userID);
        docRef.get().then((doc) => {
          if(doc.exists) {
            this.firstName = doc.data().firstName;
            this.lastName = doc.data().lastName;
            var storageRef = firebase.storage().ref(`profilePictures/${this.userID}.jpg`).getDownloadURL()
            .then((url)=> {
              this.pictureLink = url;
          })
          } else {
            console.log("No such document")
            this.loginRedirect();
          }
        }).catch((error) => {
          console.log("Error getting document: ", error)
          this.loginRedirect();
        });
      },
      fetchPortofolioData() {
        var docRef = db.collection('portofolios').doc(this.userID);
        docRef.get().then((doc) => {
          if(doc.exists) {
            this.role = doc.data().role;
            this.roleDescription = doc.data().roleDescription;
            this.skillDescription = doc.data().skillDescription;
          }
        })
      }
    }
    
  }
</script>
