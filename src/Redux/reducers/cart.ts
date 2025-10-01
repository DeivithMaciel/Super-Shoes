import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemShoe } from '../../components/Carousel'

type CartSlice = {
  items: ItemShoe[]
  isOpen: boolean
}

const initialState: CartSlice = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ItemShoe>) => {
      state.items.find((item) => item.id === action.payload.id)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen === true
    },
    close: (state) => {
      state.isOpen === false
    }
  }
})

export const { add, remove, close, open } = cartSlice.actions
export default cartSlice.reducer
