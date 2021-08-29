<template>
  <body>
    <div class="sidebar" id="sidebar">
      <div class="buttonss">
        <button
          type="button"
          class="hamburger"
          onclick="document.getElementById('sidebar').style.height = '100%'; document.getElementById('hamburger').style.display = 'none'; document.getElementById('xi').style.display = 'block';"
          id="hamburger"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="auto"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
            color="white"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            ></path>
          </svg>
        </button>
        <button
          type="button"
          class="x"
          id="xi"
          onclick="document.getElementById('sidebar').style.height = '70px'; document.getElementById('hamburger').style.display = 'block'; document.getElementById('xi').style.display = 'none';"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="auto"
            fill="currentColor"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
            color="white"
          >
            <path
              d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"
            ></path>
          </svg>
        </button>
      </div>

      <h1 class="text-h5 font-weight-thin" v-if="isLongName">{{ name }}</h1>
      <h1 class="text-h3 font-weight-thin" v-else>{{ name }}</h1>
      <v-avatar size="250">
        <v-img v-bind:src="profileImage" max-height="200" max-width="200">
        </v-img>
      </v-avatar>
      <p class="description text-h6 font-weight-thin">{{ description }}</p>
      <div class="socials">
        <a
          :href="`${linkedInLink}`"
          class="fa fa-linkedin d-inline"
          v-if="linkedInLink"
        ></a>
        <a
          :href="`${gitHubLink}`"
          class="fa fa-github d-inline"
          v-if="gitHubLink"
        ></a>
        <a
          :href="`${instagramLink}`"
          class="fa fa-instagram d-inline"
          v-if="instagramLink"
        ></a>
      </div>
      <hr />
      <div class="sections">
        <div class="linkss d-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="auto"
            fill="currentColor"
            class="bi bi-person-circle"
            color="white"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
          <router-link
            v-bind:to="{
              name: 'Home',
              params: { userID: userID },
            }"
            :class="[
              onAbout ? 'activeClass' : '',
              'section-link',
              'text-heading-5',
              'font-weight-light',
              'my-2',
            ]"
          >
            About Me
          </router-link>
        </div>
        <div class="linkss d-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="auto"
            fill="currentColor"
            class="bi bi-journals"
            color="white"
            viewBox="0 0 16 16"
          >
            <path
              d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z"
            />
            <path
              d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z"
            />
          </svg>
          <router-link
            v-bind:to="{
              name: 'Projects',
              params: { userID: userID },
            }"
            :class="[
              onPortfolio ? 'activeClass' : '',
              'section-link',
              'text-heading-5',
              'font-weight-light',
              'my-2',
            ]"
          >
            Projects
          </router-link>
        </div>
        <div class="linkss d-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="auto"
            fill="currentColor"
            class="bi bi-card-list"
            color="white"
            viewBox="0 0 16 16"
          >
            <path
              d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
            />
            <path
              d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"
            />
          </svg>
          <router-link
            v-bind:to="{
              name: 'Resume',
              params: { userID: userID },
            }"
            :class="[
              onResume ? 'activeClass' : '',
              'section-link',
              'text-heading-5',
              'font-weight-light',
              'my-2',
            ]"
          >
            Resume
          </router-link>
        </div>
        <div class="linkss d-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="auto"
            fill="currentColor"
            class="bi bi-chat-dots"
            color="white"
            viewBox="0 0 16 16"
          >
            <path
              d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
            />
            <path
              d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"
            />
          </svg>
          <router-link
            v-bind:to="{
              name: 'Contact',
              params: { userID: userID },
            }"
            :class="[
              onContact ? 'activeClass' : '',
              'section-link',
              'text-heading-5',
              'font-weight-light',
              'my-2',
            ]"
          >
            Contact
          </router-link>
        </div>
        <div class="linkss d-flex">
          <v-icon color="white">
            mdi-account-group-outline
          </v-icon>
          <router-link
            v-bind:to="{
              name: 'Others',
              params: { userID: userID },
            }"
            :class="[
              onOthers ? 'activeClass' : '',
              'section-link',
              'text-heading-5',
              'font-weight-light',
              'my-2',
            ]"
          >
            Others
          </router-link>
        </div>
      </div>
      <hr />
      <v-row
        class="sections"
        justify="center"
        align="center"
        :v-if="isLoggedIn"
      >
        <div class="my-3 mr-15 d-flex">
          <v-btn
            large
            color="#85a3e0"
            :class="[onEditAbout ? 'activeButton' : '']"
            class="white--text classic-button"
            @click="editAbout"
          >
            <v-icon left color="white">
              mdi-account-edit-outline
            </v-icon>
            ADD ABOUT ME
          </v-btn>
        </div>
        <div class="my-3 mr-15 d-flex">
          <v-btn
            large
            color="#85a3e0"
            :class="[onEditPortfolio ? 'activeButton' : '']"
            class="white--text classic-button"
            @click="editPortfolio"
          >
            <v-icon left color="white">
              mdi-notebook-edit-outline
            </v-icon>
            ADD PORTFOLIO
          </v-btn>
        </div>
        <div class="my-3 mr-15 d-flex">
          <v-btn
            large
            color="#85a3e0"
            :class="[onEditResume ? 'activeButton' : '']"
            class="white--text classic-button"
            @click="editResume"
          >
            <v-icon left color="white">
              mdi-file-document-edit
            </v-icon>
            ADD RESUME
          </v-btn>
        </div>
        <div class="my-3 ml-6 d-flex">
          <v-btn
            large
            color="#85a3e0"
            :class="[onEditProfile ? 'activeButton' : '']"
            class="white--text classic-button"
            @click="settings"
          >
            <v-icon left color="white">
              mdi-cogs
            </v-icon>
            Settings
          </v-btn>
        </div>
        <div class="my-3 ml-8 d-flex">
          <v-btn
            large
            color="#85a3e0"
            class="white--text classic-button"
            @click="logOut"
          >
            <v-icon left color="white">
              mdi-account-arrow-right-outline
            </v-icon>
            Log out
          </v-btn>
        </div>
      </v-row>
    </div>
  </body>
</template>

<script>
import image from "../assets/account.png";
import firebase from "firebase";
import "firebase/storage";
import db from "@/firebase/firebaseInit.js";
export default {
  props: [
    // "onAbout",
    // "onPortfolio",
    // "onResume",
    // "onContact",
    "onEditAbout",
    "onEditPortfolio",
    "onEditResume",
    "onEditProfile",
  ],
  data() {
    return {
      userID: "",
      currentUserId: '',
      firstName: "some",
      lastName: "dude",
      isLongName: "",
      name: "",
      profileImage: image,
      description:
        "Hi, my name is Some Dude and I'm a senior software engineer. Welcome to my personal website!",
      linkedInLink: "",
      gitHubLink: "",
      instagramLink: "",
      
    };
  },
  computed: {
    isLoggedIn() {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          return false;
        } else {
          if(this.$route.params.userID) {
            this.userID = this.$route.params.userID;
          }
          else {
            this.userID = user.uid;
          }
          this.fetchCurrentUserData();
          return true;
        }
      });
    },
    onAbout() {
      let routeName = this.$route.name === "Home";
      return this.$route.name === "Home";
    },
    onPortfolio() {
      let routeName = this.$route.name === "Projects";
      return this.$route.name === "Projects"
    },
    onResume() {
      let routeName = this.$route.name === "Resume";
      return this.$route.name === "Resume";
    },
    onContact() {
      let routeName = this.$route.name === "Contact";
      return this.$route.name === "Contact";
    },
    onOthers() {
      let routeName = this.$route.name === "Others";
      return this.$route.name === "Others";
    }
    
  },
  methods: {
    longName() {
      if (this.name.length > 12) {
        this.isLongName = true;
      } else {
        this.isLongName = false;
      }
    },
    editAbout() {
      this.$router.push("/editabout");
    },
    editPortfolio() {
      this.$router.push("/editportfolio");
    },
    editResume() {
      this.$router.push("/editresume");
    },
    settings() {
      this.$router.push("/settings");
    },
    logOut() {
      console.log("logging out");
      firebase
        .auth()
        .signOut()
        .then(() => {
          isLoggedIn();
        })
        .catch((error) => {
          // An error happened.
        });
    },
    fetchCurrentUserData() {
      console.log(this.userID);
      db.collection("users")
        .doc(this.userID)
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.firstName = doc.data().firstName;
            this.lastName = doc.data().lastName;
            this.name = this.firstName + " " + this.lastName;
            this.longName();
            this.description = doc.data().description;
            this.linkedInLink = doc.data().linkedInLink;
            this.instagramLink = doc.data().instagramLink;
            this.gitHubLink = doc.data().gitHubLink;
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
};
</script>
<style scoped>
.sidebar {
  height: 100%;
  width: 330px;
  position: fixed;
  float: left;
  top: 0;
  left: 0;
  background-color: #3366cc;
  overflow-x: hidden;
  padding-top: 20px;
  overflow-y: auto;
  text-align: center;
}
h1 {
  color: #adc2eb;
  font-size: 32px;
  margin-top: 50px;
}
.description {
  padding-top: 15px;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 18px;
  color: #d6e0f5;
  /* color: rgb(255, 239, 239); */
}
.socials {
  margin-top: 10px;
}
hr {
  margin: 15px;
  color: white;
}
.sections {
  margin-left: 70px;
}
.linkss {
  align-items: center;
  padding-bottom: 10px;
}
.sidebar a {
  padding-left: 15px;
  text-decoration: none;
  font-size: 25px;
  color: white;
}

.linkss:hover {
  opacity: 0.7;
}

.classic-button:hover {
  background-color: #3366cc !important;
}

.activeClass {
  color: #85a3e0 !important;
  font-weight: 400 !important;
}

.activeButton,
.activeButton:hover {
  color: #3366cc !important;
  background-color: #85a3e0 !important;
}
.hamburger {
  float: left;
  display: none;
}
.x {
  float: right;
  display: none;
  margin-right: 25px;
}

@media only screen and (max-width: 768px) {
  .sidebar {
    height: auto;
    width: 100vw;
    overflow-y: hidden;
    position: absolute;
    z-index: 10;
    height: 70px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .template {
    margin-bottom: px;
  }
  .hamburger {
    display: block;
  }
}
::-webkit-scrollbar {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #2952a3;
}
.fa:hover {
  opacity: 0.7;
}
.hamburger:hover {
  opacity: 0.7;
}

.x:hover {
  opacity: 0.7;
}
</style>
