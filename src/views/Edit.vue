<template>
  <div>
    <navbar :onEdit="true"></navbar>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },
    name: 'Edit',
}
</script>

<style>

</style>