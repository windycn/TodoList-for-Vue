import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [
      {
        "id": 0,
        "info": "Racing car sprays burning fuel into crowd.",
        "done": false
      },
      {
        "id": 1,
        "info": "Japanese princess to wed commoner.",
        "done": false
      },
      {
        "id": 2,
        "info": "Australian walks 100km after outback crash.",
        "done": true
      },
      {
        "id": 3,
        "info": "Man charged over missing wedding girl.",
        "done": false
      },
      {
        "id": 4,
        "info": "Los Angeles battles huge wildfires.",
        "done": true
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
