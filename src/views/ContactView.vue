<template>
  <div class="home">
    
    <h2>tous mes contacts</h2>
    <router-link to="/FormAdd">add contact</router-link>
    <card_contact v-for="contact in $store.state.contact" :key="contact.name" :contact="contact"/>
    
  </div>
</template>

<script>
import card_contact from "@/components/cardcontact.vue";

export default {
  name: 'ContactView',
  components: {
    card_contact
  }

}
</script>
<style scoped>

</style>
