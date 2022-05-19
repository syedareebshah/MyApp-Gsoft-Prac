import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { State } from 'react-native-gesture-handler'
import type { RootState } from '../../store'

// Define a type for the slice state
interface ProfileState {
  loginDetails: {
    email: String,
    password: String,
  
  },
  posts: [],
  isloading: boolean
}

// Define the initial state using that type
const initialState: ProfileState = {
  loginDetails: {
    email: '',
    password: '',
  
  },
  posts: [],
  isloading: false
}

export const profileSlice = createSlice({
  name: 'profileDetails',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    saveLoginDetails: (state, action: PayloadAction<any>) => {
      state.loginDetails.email = action.payload.email
      state.loginDetails.password = action.payload.password
    },
    getPostSuccess: (state, action: PayloadAction<any>) => {
      state.posts = action.payload
      state.isloading = false
    },
    getPostFetch: (state) => {
      state.isloading = true
    },
    getPostFailure: (state) => {
      state.isloading = false
    }
  },
})

export const { saveLoginDetails, getPostSuccess, getPostFetch, getPostFailure } = profileSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectProfile = (state: RootState) => state.profileDetails.loginDetails

export default profileSlice.reducer