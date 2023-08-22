import { createSlice } from "@reduxjs/toolkit";

const CustomerQuotation = createSlice({
    name : "Quotation",
    initialState: {
      userData: null,
    },
    reducers:{     
        setUserData: (state, action) => {
          state.Data = action.payload;    
        },        
    }
})

export { CustomerQuotation };
export const {setUserData} = CustomerQuotation.actions;
export const selectUserData = (state) => state.Quotation.Data;