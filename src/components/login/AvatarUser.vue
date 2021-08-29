<template>
  <v-card class="avatarUser">
    <v-avatar
        size="80px"
        @click="seeUser"
    >
        <img
            alt="Avatar"
            :src="image"
            >
    </v-avatar>
    <v-row justify="center" class="my-2">
        <p class="font-weight-light name">
            {{ firstName }} {{ lastName }}
        </p>
        <p class="text-caption font-weight-thin">
            {{ role }}
        </p>
    </v-row>
    <v-row justify="center">
        
    </v-row>
  </v-card>
</template>

<script>
export default {
    props: ['uid', 'firstName', 'lastName', 'profileImage', 'role', 'email', 'image'],
    methods: {
        seeUser() {
            console.log('visit user '+this.uid);
            this.$router.push({ path: `/profile/home/${this.uid}` }) 
        }
    }
}
</script>

<style scoped>
    .avatarUser {
        box-shadow: none !important;
        background-color: #eaeffa !important;
    }
    .name {
        margin-bottom: 0;
    }
</style>