import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import AddTodo from "./AddTodo";
import { deleteTodo} from "../../redux/toslice";
const Todo = () => {
  const todos = useSelector((state) => state.todo?.todos)
  console.log(todos);
  const dispatch = useDispatch();

  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
  };
  

  return (
    <div className="m-auto w-[500px]">
      <AddTodo />

      <div>
        <ul className="list-none ">

          {todos.map((todo) => {
            return (
              <li key={todo._id}>
                <div className="border-4 my-4 border-red-400 rounded-lg m-auto p-4">
                  <div className="">{todo.input}</div>
                  <div className="">{todo.createdAt}</div>
                  <button onClick={() => handleDelete(todo?._id)}>
                    <div className="">
                    <MdDelete />
                    </div>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
