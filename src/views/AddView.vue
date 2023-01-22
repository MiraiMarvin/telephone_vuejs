<template>
    <form @submit.prevent="newcontact()">
    <label for="numéro">numéro</label>
    <input v-model="formContact.telNumber" type="tel" placeholder="Numéro">
    <label for="numéro">numéro</label>
    <input v-model="formContact.name" type="text" placeholder="Nom">
    <button  type="submit">ajouter un contact</button>
    </form>
    
</template>

<script>
import card_contact from "@/components/cardcontact.vue";

export default {
    name: 'ContactView',
    components: {
      card_contact
    },
    methods: {
        newcontact(){
                this.$store.commit('ajoutContact', this.formContact)
                this.formContact = {
                    prenom: '',
                    num: ''
                }
    },

}
</script>
<style scoped>
  
</style>
  