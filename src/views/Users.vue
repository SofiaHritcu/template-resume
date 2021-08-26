<template>
<div>
    <UsersIntroduction />
    <UsersCards position="Front end developer" card_image="profile.jpg" card_name="Jon doe"/>
    
</div>
</template>

<script>
import UsersCards from '../../src/components/users/usersCards.vue'
import UsersIntroduction from '../../src/components/users/usersIntroduction.vue'

export default {
    name: 'Users',

    components: {
        UsersIntroduction,
        UsersCards
        
    }
}
</script>
