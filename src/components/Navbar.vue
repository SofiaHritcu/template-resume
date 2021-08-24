<template>
  <body>
    <div class="sidebar">
      <h1 class="text-h5 font-weight-thin" v-if="isLongName"> {{ name }} </h1>
      <h1 class="text-h3 font-weight-thin" v-else> {{ name }} </h1>
      <img v-bind:src="image_src" class="imgg" />
      <p class="description text-h6 font-weight-thin">{{ description }}</p>
      <div class="socials">
        <a href="https://www.linkedin.com/" class="fa fa-linkedin d-inline"></a>
        <a href="https://www.github.com/" class="fa fa-github d-inline"></a>
        <a
          href="https://www.instagram.com/"
          class="fa fa-instagram d-inline"
        ></a>
        <a href="https://www.yahoo.com/" class="fa fa-yahoo d-inline"></a>
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
          <a href="#" class="section-link text-heading-5 font-weight-light my-2"
            >About Me</a
          >
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
          <a href="#" class="section-link text-heading-5 font-weight-light my-2"
            >Portfolio</a
          >
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
          <a href="#" class="section-link text-heading-5 font-weight-light my-2"
            >Resume</a
          >
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
          <a href="#" class="section-link text-heading-5 font-weight-light my-2"
            >Contact</a
          >
        </div>
      </div>
      <hr />
      <v-row class="sections" justify="center" align="center" :v-if="isLoggedIn">
        <div class="my-3 mr-15 d-flex">
          <v-btn
              large
              color="#85a3e0"
              class="white--text"
              @click="editPortfolio"
          >
              <v-icon left color="white">
                  mdi-account-edit-outline
              </v-icon>
              Edit my portfolio
          </v-btn>
        </div>
        <div class="my-3 ml-8 d-flex">
          <v-btn
              large
              color="#85a3e0"
              class="white--text"
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
// :href="name"
import image from "../assets/testImg.jpg";
import firebase from 'firebase'
import db from '@/firebase/firebaseInit.js'

export default {
  data() {
    return {
      userID:'',
      firstName: 'some',
      lastName:'dude',
      isLongName:'',
      name: '',
      image_src: image,
      description:
        "Hi, my name is Some Dude and I'm a senior software engineer. Welcome to my personal website!",
    };
  },
  computed: {
    isLoggedIn() {
      firebase.auth().onAuthStateChanged(user => {
        // If user obj does not exist --> redirect to login page
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
    longName() {
      console.log(this.name.length >= 12);
      if(this.name.length >= 12){
        this.isLongName = true;
      }
      else {
        this.isLongName = false;
      }
    },
    editPortfolio() {
      this.$router.push('/edit')
    },
    logOut() {
      console.log("logging out");
    },
    fetchCurrentUserData() {
      db.collection('users').doc(this.userID).get()
      .then((doc) => {
        if (doc.exists) {
          this.firstName = doc.data().firstName;
          this.lastName = doc.data().lastName;
          this.name = this.firstName + ' ' + this.lastName;
          this.longName();
          this.description = doc.data().description;
        }
        else {
          console.log("No such document!");
          this.$router.push('/login');
        }
      }).catch((error) => {
        console.log("Error getting document: ", error)
        this.$router.push('/login');
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
}
.imgg {
  width: 170px;
  height: auto;
  border-radius: 50%;
  margin-top: 20px;
}
.description {
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

@media only screen and (max-width: 768px) {
  .sidebar {
    height: auto;
    width: 100vw;
    overflow-y: hidden;
    position: fixed;
  }
}
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #2952a3;
}
.fa:hover {
  opacity: 0.7;
}
</style>
