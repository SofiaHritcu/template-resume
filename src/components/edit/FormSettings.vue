<template>
  <v-form ref="userUpdateForm">
    <v-snackbar
      v-model="snackbarUserUpdated"
      :timeout="3000"
      top
      color="#85a3e0"
    >
      <span>Marvelous! You've updated your profile! It's looking great</span>
      <v-btn color="white" text @click="snackbarUserUpdated = false"
        >Close</v-btn
      >
    </v-snackbar>
    <v-avatar size="300" class="avatarProfile">
        <v-img v-bind:src="profileImage"
          max-height="200"
          max-width="200">
        </v-img>
    </v-avatar> 
    <v-row justify="center" class="profile-input my-5">
        <v-file-input
            hide-input
            accept="image/png, image/jpeg, image/jpg"
            prepend-icon="mdi-camera"
            @change="previewImage"
        >
        </v-file-input>
    </v-row>
    <v-row>
      <v-text-field
        v-model="firstName"
        placeholder="eg. Andrew"
        :rules="nameRules"
        label="first name"
        color="light-blue darken-4"
        class="mx-2"
      ></v-text-field>
      <v-text-field
        v-model="lastName"
        placeholder="eg. Evans"
        :rules="nameRules"
        label="last name"
        color="light-blue darken-4"
        class="mx-2"
      ></v-text-field>
    </v-row>
    <v-text-field
      v-model="email"
      label="email"
      placeholder="jake@gmail.com"
      :rules="emailRules"
      color="light-blue darken-4"
      class="my-4 mx-5"
    >
    </v-text-field>
    <v-textarea
      solo
      dense
      :counter="150"
      color="#85a3e0"
      :value="description"
      prepend-inner-icon="mdi-pencil-outline"
      class="description ml-3"
    ></v-textarea>
    <v-btn
      color="#85a3e0"
      class="white--text classic-button"
      @click="submitUserUpdateForm"
    >
      <v-icon left color="white">
        mdi-account-check-outline
      </v-icon>
      update my account
    </v-btn>
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
        firstName: "some",
        lastName: "dude",
        email: "someDude@email.com",
        profileImage: image,
        description:
            "Hi, my name is Some Dude and I'm a senior software engineer. Welcome to my personal website!",

        // data used in ui actions
        passwordShowing: true,
        snackbarUserUpdated: false,

        //picture preview
        uploadValue: 0,
        picture: null,
        imageData: '',

        //user ID
        userID: "",

        // validation rules
        nameRules: [(n) => !!n || "this field is required"],
        emailRules: [
            (e) =>
            /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]+$/.test(e) ||
            "email must have a valid format",
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

    

    submitUserUpdateForm() {
      if (this.$refs.userUpdateForm.validate()) {
        console.log(
          "submiting sign up user" +
            " " +
            this.firstName +
            " " +
            this.lastName +
            " " +
            this.email 
        );
      }
    },

    previewImage(event, img) {
        this.uploadValue = 0;
        this.picture = null;
        this.imageData = event.target.files[0];
        this.onUpload();
    },

    onUpload() {
        this.picture = null;
        const storageRef = firebase.storage().ref(`profilePictures/${this.userID}.jpg`).put(this.imageData);
        storageRef.on('state_changed', snapshot => {
            this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
        }, error=>{console.log(error.message)},
        () => {
            this.uploadValue = 100;
            storageRef.snapshot.ref.getDownloadURL().then(url => {
                this.picture = url;
            });
        });
    }, 

    fetchCurrentUserData() {
      db.collection("users")
        .doc(this.userID)
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.firstName = doc.data().firstName;
            this.lastName = doc.data().lastName;
            this.email = doc.data().email;
            this.description = doc.data().description;
            var storageRef = firebase
              .storage()
              .ref(`profilePictures/${this.userID}.jpg`)
              .getDownloadURL()
              .then((url) => {
                this.profileImage = url;
              });
          } else {
            console.log("No such document!");
            this.$router.push("/login");
          }
        })
        .catch((error) => {
          console.log("Error getting document: ", error);
          this.$router.push("/login");
        });
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
