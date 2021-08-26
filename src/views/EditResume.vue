<template>
  <v-row>
    <v-col cols="2">
      <Navbar :onEditResume="true"></Navbar>
    </v-col>
    <v-col cols="10">
      <v-container fluid class="containerr justify-content-center">
        <v-card class="cardd ">
          <v-row class="text-center" justify="center">
                <p class="my-5 text-h4 font-weight-light">Edit your resume</p>
            </v-row>
            <v-row class="text-center" justify="center">
                <p class="my-2 text-overline font-weight-light">
                  Here you can upload a document for your online
                  <span class="text-overline font-weight-normal"  style="color: #3366cc">"RESUME"</span> 
                </p>
                <p class="my-2 text-overline font-weight-light"> 
                  BUILD YOUR 
                  <span class="text-overline font-weight-normal"  style="color: #3366cc">"RESUME"</span> 
                  CAREFULLY! IT IS VERY IMPORTANT!
                </p>
          </v-row> 
          <p class="text-h4 font-weight-thin resume-section" align="start">RESUME</p>
          <v-divider class="resume-divider my-10"></v-divider>
          <v-snackbar
            v-model="snackbarResumeUpdated"
            :timeout="3000"
            top
            color="#85a3e0"
          >
            <span>Marvelous! You've updated your resume! It's looking great</span>
            <v-btn color="white" text @click="snackbarResumeUpdated = false"
              >Close</v-btn
            >
          </v-snackbar>
          <form id="formmm" ref="formm">
            <div class="selectPDF">
              <v-file-input
                truncate-length="50"
                type="file"
                v-model="resumeChosen"
                id="image"
                class="inputt my-10"
                placeholder="Add your PDF file here"
                required
                @change="encodeFileAsURL()"
              ></v-file-input>
            </div>
            <div class="message">
              <p class="text-overline font-weight-normal">Preview:</p>
            </div>
            <div class="resume">
              <pdf v-bind:src="pdfFile" class="pdff mr-0"></pdf>
            </div>
            <v-row style="width: 50%; margin-left: 26%" class="my-10">
              <v-btn
              color="#85a3e0"
              class="white--text classic-button"
              @click="submitUpdateResume"
              >
              <v-icon left color="white">
                  mdi-chevron-triple-left
              </v-icon>
              Update RESUME
              <v-icon right color="white">
                  mdi-chevron-triple-right
              </v-icon>
            </v-btn>
            </v-row>
          </form>
        </v-card>
      </v-container>
    </v-col>
   
  </v-row>
  
</template>

<script>
import Navbar from "../components/Navbar.vue";

import pdf from "vue-pdf";
 import firebase from "firebase";
import db from "@/firebase/firebaseInit";

export default {
  components: {
    Navbar,
    pdf,
  },
  data() {
    return {
      userID: "",
      pdfFile: "",
      resumeChosen: null,

      //snackbar
      snackbarResumeUpdated: false
    };
  },
  methods: {
    encodeFileAsURL() {
      const file = document.querySelector("input[type=file]").files[0];
      const reader = new FileReader();
      var that = this;
      reader.addEventListener(
        "load",
        function() {
          that.pdfFile = reader.result;
        },
        false
      );

      if (file) {
        reader.readAsDataURL(file);
      }
    },

    submitUpdateResume() {
      console.log('Submitting new resume');
      firebase.storage().ref(`resumes/${this.userID}.pdf`).put(this.resumeChosen);
      this.snackbarResumeUpdated = true;
      this.$refs.formm.reset();
      this.$router.push('resume'); 
    },
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        return false;
      } else {
        this.userID = user.uid;
        firebase
          .storage()
          .ref(`resumes/${this.userID}.pdf`)
          .getDownloadURL()
          .then((url) => {
            this.pdfFile = url;
          });
        return true;
      }
    });
  },

  

};
</script>

<style scoped>
.pdff {
  margin-top: 2%;
  margin-left: 15%;
  margin-bottom: 5%;
  width: 70%;
  border: 1px solid rgba(0, 0, 0, 0.025);
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%) !important;
}
.cardd {
  border: 1px solid rgba(0, 0, 0, 0.025);
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%) !important;
  width: 70vw;
  padding: 15px;
  margin: 15px;
}
.inputt {
  width: 100%;
  padding: 20px;
}
.container {
  display: flex;
  align-content: center;
}
h1 {
  text-align: center;
  color: #3366cc;
}
p {
  font-size: 30px;
  margin-left: 3vw;
}
.btnn {
  float: right;
  margin-bottom: 2vh;
}
.resume-section {
  color: #85a3e0;
}
.resume-divider {
  color: #3366cc;
}
</style>
