import { createSlice } from "@reduxjs/toolkit";

const initialState = {
       status : true,
       userData : null
}
const authSlice = createSlice({
       name : "auth",
       initialState,
       reducers : {
              login : (state,action) => {
                     console.log("hii");
                     
                     state.status = true,
                     state.userData = action.payload.userData
              },
              logout : (state) => {
                     console.log("hii");
                     
                     state.status = false,
                     state.userData = null
              }
       }

})
export const {login,logout} = authSlice.actions
export default authSlice.reducer