import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import wishlistSlice from './wishlistSlice'
import produtsSlice from './produtsSlice'

export const store = configureStore({
    reducer: {
        cartReducer: cartSlice,
        wishlistReducer: wishlistSlice,
        productsReducer: produtsSlice
    }
})
