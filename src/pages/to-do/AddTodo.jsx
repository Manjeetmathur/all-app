import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/toslice";
import { useSearchParams } from "react-router-dom";
const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const todoId = searchParams.get("todoId");

  console.log(input);

  useEffect(() => {
    if (todoId) {
      const todo = alltodos.find((p) => p._id === todoId);
      setInput(todo.input);
    }
  }, [todoId]);

  const createTodo = (e) => {
    e.preventDefault();
    const todo = {
      input: input,
      _id: todoId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };
    if (todoId) {
      //update
      dispatch(updateTodo(todo));
    } else {
      //create
      dispatch(addTodo(todo));
    }
    setInput("");
    setSearchParams({});
  };

  return (
    <div className="border-4 border-red-400 rounded-lg w-[500px] m-auto p-4">
      <form action="" onSubmit={createTodo}>
        <input
          required
          className='m-2 p-4 border-2 border-red-400 rounded-lg '
          type="text"
          placeholder="Enter Your task . . ."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit" className="page-btn">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
