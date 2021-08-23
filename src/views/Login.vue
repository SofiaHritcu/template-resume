<template>
    <div>
        <v-container class="grey lighten-5 mb-6 my-5">
            <v-row class="text-center" justify="center">
                <p class="my-5">Welcome to our app !</p>
            </v-row>
            <v-row no-gutters> 
                <v-col cols="5" justify="center">
                    <v-btn
                        class="ma-2"
                        outlined
                        color="indigo"
                        @click="signUpRedirect"
                    >
                        Sign Up
                        <router-view to="/signup">Sign Up</router-view>
                    </v-btn>
                </v-col>
                <v-col cols="2">

                </v-col>
                <v-col cols="5">

                </v-col>
            </v-row>
        </v-container>
    </div>

</template>

<script>
export default {
    name: 'Login',

    components: {
    },
    methods: {
        signUpRedirect(){
            this.$router.push('signup') 
        }
    }
}
</script>

<style>

</style>