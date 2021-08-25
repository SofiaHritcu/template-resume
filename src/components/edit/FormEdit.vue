<template>
  <v-container fluid>
    <p class="text-h4 font-weight-thin edit-section" align="start">ABOUT</p>
    <v-divider class="edit-divider"></v-divider>
    <v-form ref="aboutUpdateForm">
      <v-row class="about-card">
        <v-text-field
          v-model="role"
          label="role"
          :rules="roleRules"
          color="light-blue darken-4"
          class="my-10 mx-5 role-text-field"
        >
        </v-text-field>
        <p class="text-overline font-weight-thin" align="center">
          *the power phrase is very important for a first impression
        </p>
        <p class="text-overline font-weight-thin" align="center">
          take your time to come up with a strong one and then type it below
        </p>

        <v-textarea
          solo
          dense
          :counter="150"
          color="#85a3e0"
          v-model="phrase"
          prepend-inner-icon="mdi-pencil-outline"
          class="description ml-3"
        ></v-textarea>
      </v-row>
      <v-row class="skills-card">
        <p class="text-overline font-weight-thin" align="center">
          *technical skills are mandatory
        </p>
        <p class="text-overline font-weight-thin" align="center">
          choose a description to summarize yours
        </p>
        <v-textarea
          solo
          dense
          :counter="120"
          color="#85a3e0"
          :value="skillsDescription"
          prepend-inner-icon="mdi-brain"
          class="description ml-3"
        ></v-textarea>
        <p class="text-overline font-weight-thin" align="center">
          select general skills
        </p>
        <v-chip-group
          v-model="selectedSkills"
          column
          multiple
          class="skills-group my-5"
          @change="addedSkill"
        >
          <v-chip
            filter
            outlined
            v-for="skill in generalSkills"
            :key="skill.name"
            class="skill-chip"
          >
            <v-avatar left>
              <v-img
                :src="require('@/assets/' + skill.image)"
                width="50"
              ></v-img>
            </v-avatar>
            {{ skill.name }}
          </v-chip>

        </v-chip-group>

        <p class="text-overline font-weight-thin my-10" align="center">
          add particular skills
        </p>
        <v-col cols="6">
          <v-form ref="particularSkillsForm">
            <v-row
              class="particular-skill-form"
              justify="center"
              align="center"
            >
              <v-text-field
                outlined
                v-model="particularSkillName"
                label="name"
                color="light-blue darken-4"
              ></v-text-field>
              <v-text-field
                outlined
                v-model="particularSkillDescription"
                label="description"
                color="light-blue darken-4"
              ></v-text-field>
            </v-row>
            <v-btn
              fab
              dark
              color="#85a3e0"
              @click="addParticularSkill"
              class="mr-10"
            >
              <v-icon>
                mdi-plus
              </v-icon>
            </v-btn>
          </v-form>
        </v-col>
        <v-col cols="6">

            <div>
                <v-card outlined v-for="particularSkill in particularSkills" :key="particularSkill.name" class="my-5">
                     <v-avatar left>
                        <v-img
                        :src="require('@/assets/' + 'particularSkill.png')"
                        width="100"
                        ></v-img>
                    </v-avatar>
                    <v-card-title>
                        <p class="text-overline"> {{ particularSkill.name }} </p>
                    </v-card-title>
                   
                    <v-card-subtitle> {{ particularSkill.description }} </v-card-subtitle>
                </v-card>
            </div>

          <!-- <v-chip-group
            v-model="particularAddedSkills"
            column
            multiple
            class="skills-group my-5"
          >
            <v-chip
              filter
              outlined
              v-for="particularSkill in particularSkills"
              :key="particularSkill.name"
            >
              <v-avatar left>
                <v-img
                  :src="require('@/assets/' + 'particularSkill.png')"
                  width="50"
                ></v-img>
              </v-avatar>
              {{ particularSkill.name }} | {{ particularSkill.description }}
            </v-chip>
          </v-chip-group> -->
        </v-col>
      </v-row>
      <v-row class="learning-card">
        <p class="text-overline font-weight-thin" align="center">
          We are constantly growing as human beings
        </p>
        <p class="text-overline font-weight-thin" align="center">
          add  what you're currently learning
        </p>
        <v-col cols="6">
          <v-form ref="learningForm">
            <v-row
              class="learning-form"
              justify="center"
              align="center"
            >
              <v-text-field
                outlined
                v-model="learningName"
                label="name"
                color="light-blue darken-4"
              ></v-text-field>
              
            </v-row>
            <v-btn
              fab
              dark
              color="#85a3e0"
              @click="addLearning"
            >
              <v-icon>
                mdi-plus
              </v-icon>
            </v-btn>
          </v-form>
        </v-col>
        <v-col cols="6">
          <v-chip-group
            v-model="learningsAdded"
            column
            multiple
            class="skills-group my-5"
          >
            <v-chip
              filter
              outlined
              v-for="learning in learnings"
              :key="learning.name"
            >
              <v-avatar left>
                <v-img
                  :src="require('@/assets/' + 'learning.png')"
                  width="50"
                ></v-img>
              </v-avatar>
              {{ learning.name }} 
            </v-chip>
          </v-chip-group>
        </v-col>
      </v-row>
      </v-row>
      <v-row>
           <v-btn
                color="#85a3e0"
                class="white--text classic-button"
                @click="submitUpdateAboutPage"
                >
                <v-icon left color="white">
                    mdi-chevron-triple-left
                </v-icon>
                Update my ABOUT page
                <v-icon right color="white">
                    mdi-chevron-triple-right
                </v-icon>
            </v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import firebase from "firebase";
import db from "@/firebase/firebaseInit";

export default {
  data() {
    return {
      // data from user to use at submit
      userID: "",

      //1. about-card
      role: "",
      phrase: "",

      //2. skills
      skillsDescription: "",
      generalSkills: [
        { order: 0, name: "CSS", image: "CSS.png" },
        { order: 1, name: "JavaScript", image: "JavaScript.png" },
        { order: 2, name: "C", image: "C.png" },
        { order: 3, name: "C++", image: "C++.png" },
        { order: 4, name: "C#", image: "C#.png" },
        { order: 5, name: "Java", image: "Java.png" },
        { order: 6, name: "Python", image: "Python.png" },
        { order: 7, name: "React", image: "React.png" },
        { order: 8, name: "Angular", image: "Angular.png" },
        { order: 9, name: "Vue", image: "Vue.png" },
        { order: 10, name: "SQL", image: "SQL.png" },
        { order: 11, name: "php", image: "php.png" },
        { order: 12, name: "git", image: "git.png" },
      ],
      particularSkills: [],
      selectedSkills: [],
      particularAddedSkills: [],

      // form particular skills
      particularSkillName: "",
      particularSkillDescription: "",

      // learnings
      learnings: [],
      learningsAdded: [],
      learningName: '',

      // validation rules
      roleRules: [(n) => !!n || "this field is required"],
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

    fetchCurrentUserData() {},
    addedSkill() {
      console.log(this.selectedSkills.toString());
    },
    addParticularSkill() {
      if (this.$refs.particularSkillsForm.validate()) {
        console.log(
          "adding particular skill" +
            " " +
            this.particularSkillName +
            " " +
            this.particularSkillDescription
        );
        this.particularSkills.push({
          name: this.particularSkillName,
          description: this.particularSkillDescription,
        });
        this.$refs.particularSkillsForm.reset();
      }
    },
    addLearning() {
      if (this.$refs.learningForm.validate()) {
        console.log(
          "adding learning" +
            " " +
            this.learningName 
        );
        this.learnings.push({
          name: this.learningName,
        });
        this.$refs.learningForm.reset();
      }
    },


    getGeneralSkills() {
        let generalSkillsName = [];
        this.selectedSkills.forEach(selectedSkill => generalSkillsName.push(this.generalSkills[selectedSkill].name));
        return generalSkillsName;
    },

    submitUpdateAboutPage() {
        console.log("updating user " , this.userID 
                        , " role " , this.role 
                        , " phrase" , this.phrase 
                        , " technical skills " , this.selectedSkills
                        , " particular skills " , this.particularSkills
                        , "learnings " , this.learnings);
        let skills = this.getGeneralSkills();
        console.log(skills);
        // selectedSkills - [0,1,3,4] ->  generalSkills
    }
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
.role-text-field {
  width: 50% !important;
  margin-top: 7% !important;
}
.about-card,
.learning-card {
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 10%;
  margin-top: 10%;
  background-color: #f2f2f2;
  border: 1px solid rgba(0, 0, 0, 0.025);
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%) !important;
}
.skills-card {
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 10%;
  margin-top: 10%;
  background-color: #eaeffa;
  border: 1px solid rgba(0, 0, 0, 0.025);
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%) !important;
}
.skill-chip {
  height: 43% !important;
  margin-bottom: 10%;
}
.particular-skill-form {
  width: 90% !important;
}
</style>
