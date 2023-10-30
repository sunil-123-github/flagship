import { createSlice } from "@reduxjs/toolkit";

const Chain_Wheel = createSlice({
    name: "Chain Wheel",
    initialState: [],
    reducers: {
        ChainWheel: (state, action) => {
            state.push(action.payload);
        }
    }
})

export { Chain_Wheel };
export const { ChainWheel } = Chain_Wheel.actions;