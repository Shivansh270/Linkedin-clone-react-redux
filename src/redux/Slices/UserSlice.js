import React from 'react'
import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers : {
        increment: (state) => {
            
        },

        decrement: () => {

        }
    }
})

export const {increment, decrement} = UserSlice.actions;
export default UserSlice.reducer;