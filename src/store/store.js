import { configureStore } from '@reduxjs/toolkit'
import CartCountReducer from '../Redux/CartCountReducer'

export const store = configureStore({
  reducer: {
    cartCount :CartCountReducer
  },
})