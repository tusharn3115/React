import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: "1",
      text: "Hello World",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {

    // by default redux gave use access of two things state(here we get updated state value in the store) and action in reducers

    // with the redux our state is kept preserve
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo)
    }, 

    removeTodo: (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },

    updateTodo: (state, action) => {
        state.todos = state.todos.map((todo) => (
            todo.id === action.payload.id ? {...todo, ...action.payload} : todo
        ))
    }
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer