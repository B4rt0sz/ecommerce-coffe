import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show: false,
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    showInfo: (state, action) => {
      state.show = action.payload
    },
  },
})

export const { showInfo } = accountSlice.actions

export const showUserInfo = (state) => state.account.show

export default accountSlice.reducer
