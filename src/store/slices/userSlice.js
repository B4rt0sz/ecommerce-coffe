import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  logged: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.logged = action.payload
    },
  },
})

export const { setUser } = userSlice.actions

export const isUserLogged = (state) => state.user.logged

export default userSlice.reducer
