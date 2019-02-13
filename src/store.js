import Vue from 'vue'
import Vuex from 'vuex'

export const ADD_NEW_TODO = 'ADD_NEW_TODO'
export const CHANGE_TODO_STATE = 'CHANGE_TODO_STATE'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },

  mutations: {
    [ADD_NEW_TODO]: (state, data) => {
      state.todos.push({
        title: data,
        completed: false
      })
    },

    [CHANGE_TODO_STATE]: (state, index) => {
      state.todos[index].completed = !state.todos[index].completed
    }
  },

  actions: {
    addNewTodo ({ commit }, data) {
      commit(ADD_NEW_TODO, data)
    },

    changeTodoState ({ commit }, index) {
      commit(CHANGE_TODO_STATE, index)
    }
  }
})
