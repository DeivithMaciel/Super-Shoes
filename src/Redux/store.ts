import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './reducers/cart'

export const store = configureStore({
  reducer: { cartReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
})

export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
