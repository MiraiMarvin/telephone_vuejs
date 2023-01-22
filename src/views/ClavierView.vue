<template>
  <h1> {{ this.$store.state.calling_number }} </h1>
  <div class="home">
    <div class="clavier" v-for="items in [1,2,3,4,5,6,7,8,9,0]" 
    :key="items">
      <button v-on:click="complete(items)">{{ items }}</button>
    </div>
    <button class="btn_call" 
    @click="initcall()">Call</button>
  </div>
</template>

<script>
export default {
  name: 'ClavierView',
  props: [
        'callingnumber'
    ],
  methods: {
    initcall(){
      let date =  new Date().toLocaleString('fr-fr')
            let phone = this.$store.state.calling_number
            this.$store.commit('newcalls',{
              calling_number : phone,
              date : date

              })     
            
    },
    complete(items){
      this.$store.state.calling_number += items
    }
    
  }

}
</script>
<style scoped>
.home{
  display: flex;
  flex-wrap: wrap;


}
.clavier button{
  border: 2px solid black;
  padding: 20px;
  margin: 10px;
}
.clavier{
  margin: auto;
  width: 40%;


}

</style>
