<template>
  <!-- resume introduction -->
  <div class="about-me-section p-3 p-lg-5">
    <div class="container text-center contact-intro ">
      <div class="text-section pb-md-0 pb-4">
        <h3>Online Resume</h3>
        <div class="my-10">
          <!-- <a :href="pdfFile" class="classic-button" download="resume"
            >Download Resume</a
          > -->
          <v-btn
            color="#85a3e0"
            class="white--text classic-button"
            @click="downloadResume"
          >
            <v-icon left color="white">
              mdi-check
            </v-icon>
            Download Resume
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import axios from 'axios'
import db from "@/firebase/firebaseInit";

export default {
  name: "Introduction_resume_section",

  props: ["resume"],
  data() {
    return {
    userID: "",
    pdfFile: "",
    name: ""
    };
  },
  methods: {
    isLoggedIn() {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          return false;
        } else {
          return true;
        }
      });

    },

    downloadResume() {
        console.log('downloading resume');
        db.collection("users")
            .doc(this.userID)
            .get()
            .then((doc) => {
            if (doc.exists) {
                let firstName = doc.data().firstName;
                let lastName = doc.data().lastName;
                console.log(firstName + lastName);
                this.name = firstName + lastName;
            }
            });
        axios({
            url: this.pdfFile,
            method: 'GET',
            responseType: 'blob'
        }).then( response => {
            var fileURL = window.URL.createObjectURL(new Blob([response.data]));
            var fileLink = document.createElement('a');
            fileLink.href = fileURL;

            fileLink.setAttribute('download', this.name+"_resume.pdf");
            document.body.appendChild(fileLink);
            fileLink.click();
        })
    }
  },
  created() {
    this.userID = this.$route.params.userID;
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        return false;
      } else {
        console.log(this.userID);
        firebase
          .storage()
          .ref(`resumes/${this.userID}.pdf`)
          .getDownloadURL()
          .then((url) => {
            this.pdfFile = url;
          });
      }
    });
  },
};
</script>

<style scoped>
p,
h2,
h3,
h4,
h5 {
  /* font color */
  color: #292929;
}

h2 {
  font-size: 3rem;
}

h3 {
  font-size: 2rem;
  font-weight: bold;
}

p {
  font-size: 1rem;
}

.about-me-section {
  background: #fafafa;
}

.contact-intro {
  max-width: 780px;
}

.classic-button {
  background-color: #85a3e0;
  color: white !important;
  line-height: 1.5;
  font-weight: bold;
  padding: 0.375rem 1rem;
  height: 2.5rem;
  transition: all 0.4s ease-in-out;
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.classic-button:hover {
  background-color: #3366cc;
}
</style>
