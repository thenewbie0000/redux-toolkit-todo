import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

const sayHello = () => {
  console.log("hello");
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    // write code for update todo
  },
});

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions