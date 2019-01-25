import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    maxResults: 20,
    regionCode: 'US',
    videoCategoryId: '10',
    error: ''
  },
  mutations: {
    assignMR(state,val){
      state.maxResults = val ;
    },
    assignRC(state,val){
      state.regionCode = val ;
    },
    assignVC(state,val){
      state.videoCategoryId = val ;
    },
    assignE(state,val){
      state.error = val ;
    },
    removeE(state){
      state.error = '' ;
    }
  },
  actions: {
    assignMR(context,val){
      if(val>0){
        context.commit('assignMR',val)
      }
    },
    assignRC(context,val){
      context.commit('assignRC',val)
    },
    assignVC(context,val){
      context.commit('assignVC',val)
    },
    assignE(context,val){
      context.commit('assignE',val)
    },
    removeE(context){
      context.commit('removeE')
    }
 
  }
})
