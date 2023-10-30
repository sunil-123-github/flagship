import { createSlice } from "@reduxjs/toolkit";

const Linear_Bearing = createSlice({
    name : "LB",
    initialState : [],
    reducers :{
        LinearBearing : (state, action)=>{
            state.push(action.payload);
        }
    } 
})

export {Linear_Bearing};
export const {LinearBearing} = Linear_Bearing.actions;