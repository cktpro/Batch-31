import * as ActionTypes from './actionType';
// COUNTER
// Action Creator
export const addTodoList= (payload) => ({
  type: ActionTypes.ADDTODO, // ACTION TYPE
  payload,
});

// Action Creator
export const editToDoList = (payload) => ({
  type: ActionTypes.EDITTODO, // ACTION TYPE
  payload,
});
export const deleteTodo = (payload) => ({
  type: ActionTypes.DELETETODO, // ACTION TYPE
  payload,
});
// ------