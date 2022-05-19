import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './features/profileDetails/profileSlice';
import postSaga from './postSaga';
import createSagaMiddleware from 'redux-saga'

const saga = createSagaMiddleware()
export const store = configureStore({
  reducer: {
    profileDetails: profileReducer
  },
  middleware:[saga]
})
saga.run(postSaga)


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch