import { createSlice } from "@reduxjs/toolkit";

const PlacedOrders = createSlice({
    name: "Orders",
    initialState: [],
    reducers: {
        Orders: (state, action) => {
            state.push(action.payload);
        },
    },
})

export {PlacedOrders};
export const {Orders} = PlacedOrders.actions;