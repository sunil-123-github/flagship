import { createSlice } from "@reduxjs/toolkit";

const SelectedOperators = createSlice({
    name: "Operators",
    initialState: [],
    reducers: {
        setOperators: (state, action) => {
            state.push(action.payload);
        }
    }
})

export { SelectedOperators };
export const { setOperators } = SelectedOperators.actions;