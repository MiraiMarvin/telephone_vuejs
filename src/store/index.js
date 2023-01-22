import { createStore } from 'vuex'

export default createStore({
  state: {
    calling_number: '',
    contact: [
      {
        name: 'papa',
        phone: 1
      },
      {
        name: 'maman',
        phone: 9
      },
      {
        name: 'papi',
        phone: 8
      },   
    ],
    calls: [
      {
        calling_number: 8,
        date: "22/01/2023"
      },
      {
        calling_number: 1,
        date: "22/01/2023"
      },
    ],
      
    
  },
  getters: {
  },
  mutations: {
    newcalls(state, calls){
      state.calls.push(calls)

    },
    newcontact(state, contact){
      state.contact.push(contact)
    }
    
  },
  actions: {
  },
  modules: {
  }
})