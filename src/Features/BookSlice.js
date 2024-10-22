import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const booklist = createSlice({
    name:"book",
    initialState,
    reducers:{
        addBook(action,state){
           state.push(state)
        },
       

    }
})