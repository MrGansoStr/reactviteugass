import { createSlice } from "@reduxjs/toolkit";
import { clearLocalStorage, persistLocalStorage } from './../../utilities/localStorage.utility';

const EmptyUser = {
  id: 0,
  accessToken: "",
  userInfo: {}
}

export const userKey = "user";

export const userSlice = createSlice({
  name:"user",
  //initialState: EmptyUser,
  initialState: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : EmptyUser,
  reducers: {
    createUser: (state, action) => {
      persistLocalStorage(userKey, action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      const result = {...state, ...action.payload};
      persistLocalStorage(userKey, result);
      return result;
    },
    resetUser: () => {
      return EmptyUser;
    }
  }
});

export const {createUser, updateUser, resetUser} = userSlice.actions;