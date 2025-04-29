import {configureStore} from "@reduxjs/toolkit"
import userReducer from '/src/utils/userSlice.jsx'; 



const appStore=configureStore({
  reducer:{
    user:userReducer,
  },
})
export default appStore;