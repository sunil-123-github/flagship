import { createSlice } from "@reduxjs/toolkit";

const OrderReady = createSlice({
    name: "OrderReady",
    initialState: [],
    reducers: {
        IsReady: (state, action) => {
            state.push(action.payload);
        },
    },

})

export { OrderReady };
export const { IsReady } = OrderReady.actions;
