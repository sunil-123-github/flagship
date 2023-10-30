import { createSlice } from "@reduxjs/toolkit";

const HYD = createSlice({
    name : "Hyd",
    initialState : [],
    reducers :{
        Hydraulics : (state, action)=>{
            state.push(action.payload);
        }
    } 
})

export {HYD};
export const {Hydraulics} = HYD.actions;