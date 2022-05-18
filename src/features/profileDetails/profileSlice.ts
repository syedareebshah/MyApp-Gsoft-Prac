import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface ProfileState {
  loginDetails: {
    email: String,
    password: String
  }
}

// Define the initial state using that type
const initialState: ProfileState = {
  loginDetails: {
    email: '',
    password: ''
  },
}

export const profileSlice = createSlice({
  name: 'profileDetails',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    saveLoginDetails: (state, action: PayloadAction<any>) => {
      state.loginDetails.email = action.payload.email
      state.loginDetails.password = action.payload.password
    }
  },
})

export const { saveLoginDetails } = profileSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectProfile = (state: RootState) => state.profileDetails.loginDetails

export default profileSlice.reducer