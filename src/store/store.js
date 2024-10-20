import {configureStore} from "@reduxjs/toolkit"
import authSlice from "../redux/authSlice"
import todoSlice from "../redux/toslice"
const store = configureStore({
      reducer : {
            todo : todoSlice,
            auth : authSlice
            
      },
})

export default store