import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface CounterState {
  value: {
    email: String,
    password: String
  }
}

// Define the initial state using that type
const initialState: CounterState = {
  value: {
    email: '',
    password: ''
  },
}



export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      // state.value += 1
    },
    decrement: (state) => {
      // state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      // state.value += action.payload
    },
    saveLoginDetails: (state, action: PayloadAction<any>) => {
      state.value.email = action.payload.email
      state.value.password = action.payload.password
    }
  },
})

export const { increment, decrement, incrementByAmount, saveLoginDetails } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer