<template>
    <div>
        <v-container class="grey lighten-5 mb-6 my-5">
            <v-row class="text-center" justify="center">
                <p class="my-3 text-h4 font-weight-light">Welcome!</p>
            </v-row>
            <v-row class="text-center" justify="center">
                <p class="my-5 text-overline font-weight-light">Build your portfolio or get to know programmers</p>
            </v-row>
            <v-row no-gutters justify="center" align="center"> 
                <v-col cols="5" class="text-center mx-5" justify="center">
                    <form-login class="mt-4 mb-10"></form-login>
                    <v-row class="text-center mt-5" justify="center">
                        <p class="text-overline font-weight-light">You don't have an account yet ?</p>
                    </v-row>
                    <v-btn
                        class="mt-2 ma-5"
                        tile
                        color="#d6e0f5"
                        @click="signUpRedirect"
                    >
                        <v-icon left color="white">
                            mdi-pencil-outline
                        </v-icon>
                        Sign Me Up
                        <router-view to="/signup">
                            Sign Up
                        </router-view>
                    </v-btn>
                    <v-row class="text-center mt-5" justify="center">
                        <p class="text-overline font-weight-light">FORGOT YOUR PASSWORD ?!</p>
                    </v-row>
                    <v-btn
                        class="ma-2"
                        tile
                        color="#d6e0f5"
                        @click="forgotpasswordRedirect"
                    >
                        <v-icon left color="white">
                            mdi-lock-open-alert-outline
                        </v-icon>
                        Find my account
                        <router-view to="/forgotpassword"></router-view>
                    </v-btn>
                </v-col>
                <!-- <v-divider vertical class="divider ml-1"></v-divider> -->
                <v-col cols="6" class="my-12 users text-center mx-5" justify="center">
                    <v-row class="text-center my-2" justify="center">
                             <p class="font-weight-light">
                                explore and discover 
                            </p>    
                    </v-row>
                    <v-row class="text-center my-3" justify="center">
                        <div class="containerUserColumns">
                            <div class="userColumns" v-for="column in columns">
                                <div class="user" v-for="(user, index) in Object.keys(column)">
                                <avatar-user :firstName="column[user].firstName" :lastName="column[user].lastName" :role="column[user].role" :uid="column[user].uid" :image="column[user].image"></avatar-user>
                                </div>
                            </div>
                        </div>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>

</template>

<script>
import AvatarUser from '../components/login/AvatarUser.vue';
import FormLogin from '../components/login/FormLogin.vue'
import firebase from "firebase";
import db from "@/firebase/firebaseInit";

export default {
    name: 'Login',

    components: {
        FormLogin,
        AvatarUser
    },
    data() {
        return {
            users: [],
            columnsUsers: 3
        };
    },
    methods: {
        signUpRedirect(){
            this.$router.push('signup'); 
        },
        forgotpasswordRedirect() {
            this.$router.push('forgotpassword'); 
        }
    },
    computed: {
        columns: function() {
            let columns = [];
            let mid = Math.ceil(Object.keys(this.users).length / this.columnsUsers);

            for (let col = 0; col < this.columnsUsers; col++) {
                columns.push(Object.entries(this.users).slice(col * mid, col * mid + mid).map(entry => entry[1]));
            }
            return columns;
        }
    },
    mounted() {
        db.collection("users").get().then(async (usersFetched) => {
            usersFetched.forEach( async (userFetched) => {
                var firstName = userFetched.data().firstName;
                var lastName = userFetched.data().lastName;
                var uid = userFetched.id;
                var profileImage = await  firebase
                                    .storage()
                                    .ref(`profilePictures/${uid}.jpg`)
                                    .getDownloadURL();
                var portfolioFetched = await db.collection("portofolios").doc(uid).get();
                var role = '';
                if (portfolioFetched.data() !== undefined) {
                    role = portfolioFetched.data().role;
                };
                this.users.push({ 
                    firstName: firstName, 
                    lastName: lastName, 
                    role: role, 
                    uid: uid, 
                    image: profileImage
                    }, 
                );
            });
        });
    }
}
</script>

<style>
.containerUserColumns {
  display: flex;
}
.userColumns {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.user {
  padding-left: 2vw;
  padding-right: 2vw;
  margin: 2vw;
}
.users{
    background-color: #eaeffa;
    height: fit-content;
}
.divider {
    border: #85a3e0 1px solid !important;
    opacity: 0.5;
}

@media only screen and (max-width: 991px) {
    .containerUserColumns {
        flex-wrap: wrap;
    }}

</style>