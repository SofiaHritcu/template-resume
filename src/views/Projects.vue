<template>
  <v-row>
    <v-col cols="3">
      <navbar></navbar>
    </v-col>
    <v-col cols="9">
      <div>
        <Introduction_project_section
          description_projects="Here you can check all of my projects."
        />
        <div class="container">
          <div class="row justify-content-center">
            <Cards_project_section
              v-for="project in projects"
              :key="project.title"
              :project_background="project.project_background"
              :project_name="project.project_name"
              :project_description="project.project_description"
            />
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Introduction_project_section from "../../src/components/projects/introduction-project-section.vue";
import Cards_project_section from "../../src/components/projects/cards-project-section.vue";
import firebase from "firebase";
import db from "@/firebase/firebaseInit";

export default {
  name: "Projects",

  data() {
    return {
      userID: "",
      projects: []
    };
  },

  components: {
    Navbar,
    Introduction_project_section,
    Cards_project_section,
  },

  methods: {
    loginRedirect() {
      this.$router.push("/login");
    },

    async getAllData() {
      this.getUserID();
      this.fetchProjectsData();
    },

    getUserID() {
      //trebuie modificata putin functia asta!!
      this.userID = this.$route.params.userID;
    },

    fetchProjectsData() {
      var docRef = db
        .collection("projects")
        .where("userID", "==", this.userID)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            this.projects.push({project_name: doc.data().title, project_description: doc.data().description, project_background: doc.data().image});
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
  },

  async created() {
    this.getAllData();
  },
};
</script>


