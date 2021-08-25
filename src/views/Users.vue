<template>
<div>
    <UsersCards position="Front end developer" card_image="profile.jpg" card_name="Jon doe"/>
</div>
</template>

<script>
import UsersCards from '../../src/components/users/usersCards.vue'

export default {
    name: 'Users',

    components: {
        UsersCards,
    }
}
</script>
