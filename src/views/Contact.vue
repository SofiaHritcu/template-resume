<template>
<div>
<Introduction_contact_section description_contact="Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email." />
<Contact_form />
</div>
</template>

<script>

import Introduction_contact_section from '../../src/components/contact/introduction-contact-section.vue'
import Contact_form from '../../src/components/contact/contact-form.vue'

  export default {
    name: 'Contact',

    components: {
    Introduction_contact_section,
    Contact_form
    }
  }
</script>
