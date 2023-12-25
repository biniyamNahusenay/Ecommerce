import { configureStore } from "@reduxjs/toolkit"
import userReudcer from "./userSlice"
import productReducer from "./productSlice"

export const store = configureStore({
  reducer: {
    user:userReudcer,
    product:productReducer
  }
})
