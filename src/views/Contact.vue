<template>
<div class="row">
  <div class="col-lg-3 col-md-4">
    <navbar></navbar>
  </div>
  <div class="col-lg-9 col-md-8 col-12 pt-0 pt-md-0 pt-5 ">
    <Introduction_contact_section description_contact="Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email." />
    <Contact_form />
  </div>
</div>
</template>

<script>

import Introduction_contact_section from '../../src/components/contact/introduction-contact-section.vue'
import Contact_form from '../../src/components/contact/contact-form.vue'
import Navbar from '../components/Navbar.vue'

  export default {
    name: 'Contact',

    components: {
    Introduction_contact_section,
    Contact_form,
        Navbar
    }
  }
</script>
