import { createSlice } from "@reduxjs/toolkit";

const Screw_Jack = createSlice({
    name: "SJ",
    initialState: [],
    reducers: {
        ScrewJack: (state, action) => {
            state.push(action.payload);
        }
    }
})

export { Screw_Jack };
export const { ScrewJack } = Screw_Jack.actions;