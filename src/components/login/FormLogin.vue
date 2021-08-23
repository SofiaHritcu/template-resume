<template>
    <v-form ref="userLoginForm">
        <v-text-field 
                v-model="email" 
                label="email" 
                placeholder="jake@gmail.com"
                :rules="emailRules"
                color="light-blue darken-4"
                class="my-4 ml-2">
        </v-text-field>
        <v-text-field
            :type="passwordShowing ? 'password' : 'text'"
            v-model="password" 
            label="password" 
            :rules="passwordRules"
            color="light-blue darken-4"
            class="my-4 ml-2"
            :append-icon="passwordShowing ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
            @click:append="() => (passwordShowing = !passwordShowing)"
            autocomplete="off"
        ></v-text-field>
        <v-btn
            tile
            color="#85a3e0"
            @click="login"
        >
            <v-icon left color="white">
                mdi-lock-open-check-outline
            </v-icon>
            Login
        </v-btn>
    </v-form>
</template>

<script>
export default {
    data() {
        return {
            // data from user to use at logging in
            email: '',
            password: '',

            // data used in ui actions
            passwordShowing: true,

            // validation rules
            emailRules : [
                e => !!e || 'type in your email'
            ],
            passwordRules : [
                p => !!p || 'type in your password',
            ],
        };
    },
    methods: {
        login() {
            if(this.$refs.userLoginForm.validate()) {
                console.log('submiting logging in user'+' '+this.email+' '+this.password);
                this.$refs.userLoginForm.reset();
            }
        }
    }
}
</script>

<style>

</style>