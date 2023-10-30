import { createSlice } from "@reduxjs/toolkit";

const Clutch = createSlice({
    name: "Clutch",
    initialState: [],
    reducers: {
        CLutch: (state, action) => {
            state.push(action.payload)
        }
    }
})

export { Clutch };
export const { CLutch } = Clutch.actions;