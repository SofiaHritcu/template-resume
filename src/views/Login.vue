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
export default {
    name: 'Login',

    components: {
        FormLogin,
        AvatarUser
    },
    data() {
        return {
            users: { 
                user1: { firstName: 'user1', lastName: 'lastName 1', role:'developer', uid: '5XdfgY32XNNY', image: 'https://icon-library.com/images/manager-512.png'}, 
                user2: { firstName: 'user2', lastName: 'lastName 2', role:'developer', uid: '5XdfgY32XNNY', image: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/businessman-10-132143.png'  }, 
                user3: { firstName: 'user3', lastName: 'lastName 3', role:'developer', uid: '5XdfgY32XNNY', image: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/employee-417-789460.png'},
                user4: { firstName: 'user4', lastName: 'lastName 4', role:'developer', uid: '5XdfgY32XNNY', image: 'https://cdn.iconscout.com/icon/free/png-512/avatar-373-456325.png'  },
                user5: { firstName: 'user5', lastName: 'lastName 5', role:'developer', uid: '5XdfgY32XNNY', image: 'https://image.flaticon.com/icons/png/512/194/194938.png'  },
                user6: { firstName: 'user6', lastName: 'lastName 6', role:'developer', uid: '5XdfgY32XNNY', image: 'https://crisstalinconstructii.ro/wp-content/uploads/2021/03/baiat.png'  },
                // user7: { firstName: 'user7', lastName: 'lastName 7', role:'developer', uid: '5XdfgY32XNNY'  },
                // user8: { firstName: 'user8', lastName: 'lastName 8', role:'developer', uid: '5XdfgY32XNNY'  },
                // user9: { firstName: 'user9', lastName: 'lastName 9', role:'developer', uid: '5XdfgY32XNNY'  },
            },
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
</style>