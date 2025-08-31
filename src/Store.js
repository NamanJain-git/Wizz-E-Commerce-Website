import { configureStore } from '@reduxjs/toolkit'
import Slicecart from"./Slice/Slicecart"



export const store = configureStore({
  reducer: {
    cart:Slicecart,
  },
})