import { configureStore } from '@reduxjs/toolkit'
import { viewerSlice } from './reducers/viewerReducer'

export const store = configureStore({
  reducer: {
     viewer: viewerSlice.reducer,

  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
