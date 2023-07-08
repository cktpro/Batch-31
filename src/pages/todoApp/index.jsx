import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoList,editToDoList, deleteTodo } from "store/todoList/action";

function TodoApp(props) {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoReducer.todoList);
  const [mission, setMission] = useState("");
  const onChange = useCallback((e) => {
    setMission(e.target.value);
  }, []);
  const onAddToDo = useCallback(() => {
    if (mission) {
      dispatch(
        addTodoList({
          id: Math.floor(Math.random() * 99),
          text: mission,
          callback: ()=>setMission(""),
        })
      );
    }
  }, [dispatch, mission]);
  const editToDo = useCallback((id) => {
    const textChange=prompt("Nhập nội dung");
    if(textChange){
      dispatch(
        editToDoList({
          id: id,
          text: textChange,
        })
      );
    }
  }, [dispatch]);
  const onDeleteTodo = useCallback((id) => () => {
    dispatch(
      deleteTodo({id})
    );
  }, [dispatch]);
  return (
    <>
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Recipient's username"
        value={mission}
        onChange={onChange}
      />
      <span className="input-group-text" id="basic-addon2">
        <button onClick={onAddToDo}>Add</button>
      </span>
    </div>
    {todoList.length > 0 ? <ul>
        {
          todoList?.map(({id, text})=> <li key={id}>
            {text}
            <button onClick={()=>editToDo(id)}>Sửa</button>
            <button onClick={onDeleteTodo(id)}>Xóa</button>
            
          </li>)
        }
      </ul> : <span>Chưa có nhiệm vụ</span>}
      </>
  );
}

export default TodoApp;
