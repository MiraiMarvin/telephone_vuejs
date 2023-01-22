<template>
<div class="home">
    
    <h2>tous mes appelles</h2>
    <card_calls v-for="calls in $store.state.calls" :key="calls.calling_number" />
    
  </div>
</template>

<script>
import card_calls from "@/components/cardcall.vue";


export default {
  name: 'JournalView',
  components: {
    card_calls
  }

}
</script>
<style scoped>

</style>
