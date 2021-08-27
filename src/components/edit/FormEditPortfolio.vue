<template>
  <v-container fluid>
    <p class="text-h4 font-weight-thin edit-section" align="start">PORTFOLIO</p>
    <v-divider class="edit-divider"></v-divider>

    <v-form ref="editPortfolioForm">
      <v-snackbar
        v-model="snackbarPortfolioUpdated"
        :timeout="3000"
        top
        color="#85a3e0"
      >
        <span
          >Marvelous! You've updated your portfolio! It's looking great</span
        >
        <v-btn color="white" text @click="snackbarPortfolioUpdated = false"
          >Close</v-btn
        >
      </v-snackbar>
      <v-row class="portfolio-card">
        <v-row>
          <v-text-field
            v-model="title"
            placeholder="eg. ProjectTitle1"
            :rules="titleRules"
            label="title"
            color="light-blue darken-4"
            class="mx-2"
          ></v-text-field>
        </v-row>
        <v-textarea
          solo
          dense
          :counter="150"
          color="#85a3e0"
          v-model="description"
          prepend-inner-icon="mdi-pencil-outline"
          class="description my-3"
        ></v-textarea>
        <p class="text-overline font-weight-thin" align="center">
          add a suggestive image for your project
        </p>
        <v-row
          justify="center"
          align="center"
          class="my-5 mr-1 ml-1 preview-project-image"
        >
          <v-img v-bind:src="projectImage" max-height="300" max-width="300">
          </v-img>
        </v-row>
        <v-row justify="center" class="profile-input my-2">
          <v-file-input
            hide-input
            accept="image/png, image/jpeg, image/jpg"
            prepend-icon="mdi-camera"
            v-model="projectPictureChosen"
            @change="previewImage"
          >
          </v-file-input>
        </v-row>
      </v-row>
      <v-row>
        <v-btn
          color="#85a3e0"
          class="white--text classic-button"
          @click="submitAddProject"
        >
          <v-icon left color="white">
            mdi-book-check-outline
          </v-icon>
          Add project
        </v-btn>
      </v-row>
    </v-form>

    <v-card
      :class="[
        'mx-auto',
        'shaded-box',
        'my-10',
        index % 2 === 1 ? 'blue-background' : '',
      ]"
      max-width="400"
      v-for="(project, index) in projects"
      :key="project.title"
    >
      <v-img :src="project.image"></v-img>
      <v-card-title>
        {{ project.title }}
      </v-card-title>
      <v-card-actions>
        <v-btn color="#3366cc" text>
          See Description
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-text>
            {{ project.description }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-container>
</template>

<script>
import firebase from "firebase";
import db from "@/firebase/firebaseInit";
import projectImg from "../../assets/project.png";

export default {
  data() {
    return {
      // data from user to use at submit
      userID: "",
      title: "",
      description: "",

      // project image
      projectImage: projectImg,

      //picture preview
      uploadValue: 0,
      imageData: "",
      projectPictureChosen: null,

      // projects data
      projects: [],

      // ui needed data
      show: false,
      snackbarPortfolioUpdated: false,

      // validation rules
      titleRules: [
        (t) =>
          (!!t && /^[a-zA-Z0-9_. -]*$/.test(t)) ||
          "title can contain only letters, digits  or . - _ ",
      ],
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

    previewImage(event, img) {
      this.onUpload();
    },

    onUpload() {
      var time = new Date().getTime();
      const storageRef = firebase
        .storage()
        .ref(`projectPictures/${time + "_" + this.userID}.jpg`)
        .put(this.projectPictureChosen);
      storageRef.on(
        "state_changed",
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.projectImage = url;
          });
        }
      );
    },

    submitAddProject() {
      if (this.$refs.editPortfolioForm.validate()) {
        this.projects.push({
          title: this.title,
          description: this.description,
          image: this.projectImage,
        });

        var docRef = db.collection("projects").doc();
        docRef.set({
          title: this.title,
          description: this.description,
          userID: this.userID,
          image: this.projectImage,
        });

        this.title = '';
        this.description = '';
        this.projectImage = projectImg;
        this.snackbarPortfolioUpdated = true;
      }
    },

    fetchCurrentUserData() {},
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
.edit-section {
  color: #85a3e0;
}
.edit-divider {
  color: #3366cc;
}
.shaded-card {
  border: 1px solid rgba(0, 0, 0, 0.025);
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%) !important;
}
.blue-background {
  background: #eaeffa;
}
.portfolio-card {
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 10%;
  margin-top: 10%;
  background-color: #f2f2f2;
  border: 1px solid rgba(0, 0, 0, 0.025);
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%) !important;
}
.preview-project-image {
  padding: 7%;
  width: 50% !important;
  border: 2px solid #3366cc;
  border-radius: 2%;
  box-shadow: 0px 0px 0px 8px rgba(214, 224, 245, 1);
}
</style>
