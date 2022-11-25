import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from './states/user';

export const UserStoreGeneral = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});

export default UserStoreGeneral;