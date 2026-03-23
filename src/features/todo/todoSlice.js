import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos : []
};

const todoSlice = createSlice({
  name:"todos",
  initialState,
  reducers:{
    addTodo : (state, action)=>{
      const newTodo = {
        id:Date.now(),
        text:action.payload,
        completed:false
      };
      state.todos.push(newTodo)
    },
    
  }
})