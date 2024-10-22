import { configureStore } from '@reduxjs/toolkit'
import booklist from "../Features/BookSlice"

export const store  = configureStore({
    reducer:{
        Books: booklist
    }
})
