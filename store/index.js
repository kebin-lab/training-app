import Vuex from 'vuex';

const Store = () => {
  return new Vuex.Store({
    state: {
      tasks:[
        {
          id: 1,
          name: "task1",
          description: "洗濯をする",
          listId: 1
        }
      ],
      token: null
    },
    mutations: {
      addTask(state, task) {
        state.tasks,push(task)
      }
    },
    actions: {

    },
    getters: {

    }
  })
}