import * as types from './mutations_type.js'
import Vue from 'vue'

export const state = {
  count: 0,
  todos: [
    { key: 0, content: 'todo1', done: true },
    { key: 1, content: 'todo2', done: false },
    { key: 2, content: 'todo3', done: false },
    { key: 3, content: 'todo4', done: false },
    { key: 4, content: 'todo5', done: false }
  ]
}

let todoKey = state.todos.length;

export const mutations = {
  [types.INCREASE] (state, num) {
    state.count += num;
    console.log('INCREASE', num, 'state?', state.count);
  },
  [types.DECREASE] (state, num) {
    state.count -= num;
    console.log('DECREASE', num, 'state?', state.count);
  },
  [types.COUNT_RESET] (state) {
    state.count = 0;
    console.log('COUNT_RESET - state?', state.count);
  },

  // todo
  [types.ADD_TODO] (state, newTodo) {
    state.todos.push({
      key: todoKey,
      content: newTodo,
      done: false
    });

    todoKey++;
  },

  [types.TOGGLE_TODO] (state, key) {
    for(var i in state.todos){
      var item = state.todos[i];
      if ( item.key === key){
        item.done = !item.done;
        console.log('TOGGLE_TODO:', item.content, 'done?', item.done);
        break;
      }
    }
  },

  [types.DELETE_TODO] (state, key) {
    for(var i in state.todos){
      var item = state.todos[i];
      if ( item.key === key){
        console.log('DELETE_TODO:', item.content, ', index?', i);
        state.todos.splice(i, 1);
        break
      }
    }
  },
}