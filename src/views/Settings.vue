<template>
  <div>
    <navbar :onEditProfile="true"></navbar>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },
    name: 'Settings',
}
</script>

<style>

</style>