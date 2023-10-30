import { createSlice } from "@reduxjs/toolkit";

const Coupling = createSlice({
    name : "Coupling",
    initialState : [],
    reducers :{
        COupling : (state,action) =>{
            state.push(action.payload);
        }
    }
})

export {Coupling};
export const {COupling} = Coupling.actions;