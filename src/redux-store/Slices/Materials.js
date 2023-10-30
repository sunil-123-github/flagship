import { createSlice } from "@reduxjs/toolkit";

const Steel = createSlice({
    name: "Steel",
    initialState: [],
    reducers: {
        PurchaseSteel: (state, action) => {
            state.push(action.payload);
        },
    },
})

const Iorn = createSlice({
    name : "Iorn",
    initialState : [],
    reducers : {
        PurchaseIorn : (state,action) =>{
            state.push(action.payload);
        }
    }
})

const Aluminium = createSlice({
    name : "Aluminium",
    initialState : [],
    reducers : {
        PurchaseAluminium : (state,action) =>{
            state.push(action.payload);
        }
    }
})


const Polymer = createSlice({
    name : "Polymer",
    initialState : [],
    reducers : {
        PurchasePolymer : (state,action) =>{
            state.push(action.payload);
        }
    }
})


export { Steel, Iorn, Aluminium,Polymer};
export const { PurchaseSteel } = Steel.actions;
export const {PurchaseIorn} = Iorn.actions;
export const {PurchaseAluminium} = Aluminium.actions;
export const {PurchasePolymer} = Polymer.actions;


