import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import userReducer from './slices/userSlice'
import accountReducer from './slices/accountSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    account: accountReducer,
  },
  devTools: true,
})
