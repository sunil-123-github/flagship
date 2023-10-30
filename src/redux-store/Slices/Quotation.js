import { createSlice } from "@reduxjs/toolkit";

const CustomerQuotation = createSlice({
  name: "Quotation",
  initialState: [],
  reducers: {
    setUserData: (state, action) => {
      state.push(action.payload);
    },

  }
})

export { CustomerQuotation };
export const { setUserData } = CustomerQuotation.actions;


