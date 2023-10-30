import { createSlice } from "@reduxjs/toolkit";

const Ball_Bearing = createSlice({
    name:"BallBearing",
    initialState:[],
    reducers:{
        BallBearing : (state,action)=>{
            state.push(action.payload);
        },
    }
})

export {Ball_Bearing};
export const {BallBearing} = Ball_Bearing.actions;