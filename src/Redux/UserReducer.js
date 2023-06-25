import { createSlice } from "@reduxjs/toolkit";



export const cartSlice = createSlice({
  name:"user",
  initialState:{
    user:[],
  },
  reducers:{
    login : (state,action) => {
          console.log("added")
          const itemInCart = state.user.find((item) => item.id == action.payload.id);
            state.user.push({...action.payload})
          
        },
        logout : (state,action) => {
            state.user = [];
        },
      
    }
    });


export const {login,logout,number} = cartSlice.actions;
export const selectUser = (state) => state.user.user
export default cartSlice.reducer;