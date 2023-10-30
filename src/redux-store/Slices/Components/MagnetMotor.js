import { createSlice } from "@reduxjs/toolkit";

const Magent_Motor = createSlice({
    name : "MM",
    initialState : [],
    reducers :{
        MagnetMotor : (state, action)=>{
            state.push(action.payload);
        }
    } 
})

export {Magent_Motor};
export const {MagnetMotor} = Magent_Motor.actions;