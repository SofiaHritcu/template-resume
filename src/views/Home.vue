<template>
  <v-row>
    <v-col cols="0" md="5" lg="3">
      <navbar :onAbout="true"></navbar>
    </v-col>
    <v-col cols="12" md="7" lg="9">
      <Home_introduction_section
        :picture_user="pictureLink"
        :firstName="firstName"
        :lastName="lastName"
        :job_name="role"
        :job_description="roleDescription"
      />
      <div class="overview-section p-3 p-lg-5">
        <div class="what-i-do pl-5 mb-4 mt-5">
            <h3>Technical Skills</h3>
        </div>
        <div class="skills_description pb-5">
            <p>{{ skillsDescription }}</p>
        </div>
        <div class="container">
          <!-- Skills with image section -->
          <div class="row pt-5">
            <home-technologies
              v-for="generalSkill in generalSkills"
              :key="generalSkill"
              :skill_title="generalSkill"
            ></home-technologies>
            <home-particular-skills
              v-for="particularSkill in particularSkills"
              :key="particularSkill"
              :skill_title="particularSkill.name"
              :skill_details="particularSkill.description"
            ></home-particular-skills>
          </div>
        </div>
      </div>
      <Home_slider_projects
        project_name="Proiectul NO1"
        project_description="Cel mai smecher proiect ever"
      />
      <div class="overview-section p-3 p-lg-5">
        <div class="container">
          <div class="row pt-5">
            <home-learning v-for="currentlyLearning in currentlyLearnings " :key="currentlyLearning" :learning_name="currentlyLearning.name"></home-learning>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Home_introduction_section from "../../src/components/home/home-introduction-section.vue";
import HomeTechnologies from "../../src/components/home/home-technologies.vue";
import HomeParticularSkills from "../../src/components/home/home-particular-skills.vue";
import Home_slider_projects from "../../src/components/home/home-slider-projects";
import HomeLearning from "../../src/components/home/home-learning.vue";
import Navbar from "../components/Navbar.vue";
import firebase from "firebase";
import db from "@/firebase/firebaseInit";

export default {
  name: "Home",

  components: {
    Home_introduction_section,
    HomeTechnologies,
    HomeParticularSkills,
    Home_slider_projects,
    HomeLearning,
    Navbar,
  },

  data() {
    return {
      userID: "",
      firstName: "",
      lastName: "",
      pictureLink: "",
      role: "",
      roleDescription: "",
      skillDescription: "",
      generalSkills: "",
      particularSkills: "",
      currentlyLearnings: "",
    };
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
      this.fetchUserData();
      this.fetchPortofolioData();
    },

    getUserID() {
      //trebuie modificata putin functia asta!!
      firebase.auth().onAuthStateChanged((user) => {
        this.userID = user.uid;
      });
    },

    async fetchUserData() {
      var docRef = db.collection("users").doc(this.userID);
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.firstName = doc.data().firstName;
            this.lastName = doc.data().lastName;
            var storageRef = firebase
              .storage()
              .ref(`profilePictures/${this.userID}.jpg`)
              .getDownloadURL()
              .then((url) => {
                this.pictureLink = url;
              });
          } else {
            console.log("No such document");
            this.loginRedirect();
          }
        })
        .catch((error) => {
          console.log("Error getting document: ", error);
          this.loginRedirect();
        });
    },
    fetchPortofolioData() {
      var docRef = db.collection("portofolios").doc(this.userID);
      docRef.get().then((doc) => {
        if (doc.exists) {
          this.role = doc.data().role;
          this.roleDescription = doc.data().roleDescription;
          this.skillDescription = doc.data().skillDescription;
          this.generalSkills = doc.data().generalSkills;
          this.particularSkills = doc.data().particularSkills;
          this.currentlyLearnings = doc.data().currentlyLearning;
        }
      });
    },
  },
};
</script>
