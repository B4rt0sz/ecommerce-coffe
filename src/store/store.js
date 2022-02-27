import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import userReducer from './slices/userSlice'
import accountReducer from './slices/accountSlice'

import {
  createStateSyncMiddleware,
  initStateWithPrevTab,
} from 'redux-state-sync'

const config = { blacklist: [] }

const middlewares = [createStateSyncMiddleware(config)]

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    account: accountReducer,
  },
  middleware: middlewares,
  devTools: true,
})

initStateWithPrevTab(store)
