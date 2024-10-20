import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todocontent = action.payload;
      console.log(todocontent);
      state.todos.push(todocontent);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
   
    deleteTodo: (state, action) => {
      const todoId = action.payload;

      const index = state.todos.findIndex((item) => item._id === todoId);
      if (index >= 0) {
        state.todos.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
