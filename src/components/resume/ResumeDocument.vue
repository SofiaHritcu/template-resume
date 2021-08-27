<template>
  <pdf :src="pdfFile" class="pdff mr-0"></pdf>
</template>

<script>
import firebase from "firebase";
import pdf from "vue-pdf";

export default {
  components: {
    pdf,
  },
  props: ["resume"],
  data() {
    return {
      userID: '',
      pdfFile: "",
    };
  },
  methods: {
    isLoggedIn() {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          return false;
        } else {
          this.userID = user.uid;
          return true;
        }
      });
    },
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        return false;
      } else {
        this.userID = user.uid;
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
    // fetch pdf resume file from firebase storage
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pdff {
  margin-top: 5%;
  margin-left: 15%;
  width: 70%;
  border: 1px solid rgba(0, 0, 0, 0.025);
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%) !important;
}
.resume {
  margin-left: 330px;
}

@media only screen and (max-width: 768px) {
  .resume {
    margin-left: 0px;
    margin-top: 650px;
  }
}
</style>
