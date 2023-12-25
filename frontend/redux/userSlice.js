import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName:"",
    lastName:"",
    email:"",
    _id:"",
    image:""
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        loginRedux:(state,action)=>{
           // console.log(action.payload.userData)
            state.firstName = action.payload.userData.firstName
            state.lastName = action.payload.userData.lastName
            state.email = action.payload.userData.email
            state._id = action.payload.userData._id
            state.image = action.payload.userData.image
        },
        logoutRedux:(state,action)=>{
              state.firstName = ""
              state.lastName = "" 
              state.email = "" 
              state._id = ""
              state.image = ""     
         }
    }
})
  
export default userSlice.reducer  
export const {loginRedux,logoutRedux} = userSlice.actions  