import { createSlice } from "@reduxjs/toolkit";

const SuppliersList = createSlice({
    name: "Suppliers",
    initialState: [],
    reducers: {
        setSuppliers: (state, action) => {
            state.push(action.payload);
        },
    }
})

export { SuppliersList };
export const {setSuppliers} = SuppliersList.actions;