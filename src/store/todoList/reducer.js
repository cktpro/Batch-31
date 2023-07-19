import * as ActionTypes from "./actionType";

// DEFAULT STATE
const defaultState = {
  todoList: [{
    id:1,
    text:"Nhiệm vụ mẫu 1"
  }

  ],
  loading: false,
};

// const [count, setCount] = React.useState(0)

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.ADDTODO: // new
    {
      const newList = [...state.todoList];
      newList.push(action.payload);
      action.payload.callback();
      return { ...state, todoList: newList };
    }
    case ActionTypes.EDITTODO: // new
    {
      // const newList = [...state.todoList];
      
      // for(let i=0 ;i<=newList.length-1;i++){
      //     if(newList[i].id===action.payload.id){
      //       newList[i].text=action.payload.text
      //       break;
      //     }}
      const newList = [...state.todoList];
      const idx = state.todoList.findIndex((i) => i.id === action.payload.id);
      newList[idx].text=action.payload.text
      
      return { ...state, todoList: newList };
    }
    case ActionTypes.DELETETODO: // new
    {
      const newList = state.todoList.filter((i) => i.id !== action.payload.id);
      return { ...state, todoList: newList };
    }

    default:
      return state;
  }
};

export default todoReducer;

// Notes:
// Object.assign method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// Spread syntax:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
