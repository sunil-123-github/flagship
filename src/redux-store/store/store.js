import { configureStore } from "@reduxjs/toolkit";
import { CustomerQuotation } from "../Slices/Quotation";

export  const store = configureStore({
    reducer : {
      Quotation : CustomerQuotation.reducer,
    },
   
});