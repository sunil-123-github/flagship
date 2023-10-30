import { createSlice } from "@reduxjs/toolkit";

const TopMNG = createSlice({
    name: "TopMNG",
    initialState: [],
    reducers: {
        TopManegement: (state, action) => {
            state.push(action.payload);
        },
    }
})

const Operators = createSlice({
    name: "Operators",
    initialState: [],
    reducers: {
        MachineOperators: (state, action) => {
            state.push(action.payload);
        }
    }
})

export { TopMNG };
export { Operators };
export const { TopManegement } = TopMNG.actions;
export const { MachineOperators } = Operators.actions;
