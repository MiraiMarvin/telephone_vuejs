<template>
    <div>
        <h1>{{ calls.calling_number }}</h1>
        <p>{{ calls.date }}</p>
        <button @click="initCall(calls.calling_number)">rapeller</button>
    </div>
</template>

<script>
export default {
name: 'card_calls',
props: [
'calls'
],
methods: {
    initcall(){
    let date =  new Date().toLocaleString('fr-fr')
    let phone = this.$store.state.calling_number
    this.$store.commit('newcalls',{
        calling_number : phone,
        date : date
        })     
            
    }
},


}

</script>


<style scoped>
div{
    border: 1px solid black;
    padding: 10px;
}

</style>
