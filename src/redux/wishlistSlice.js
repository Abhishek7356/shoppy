import { createSlice, createAsyncThunk, isRejectedWithValue, } from '@reduxjs/toolkit'
import axios from 'axios';
import { BASE_URL } from './baseUrl';


const initialState = {
    loading: true,
    data: [],
    error: false
}

export const fetchAllWishlistItems = createAsyncThunk('fetch/wishlist/items', async () => {
    return await axios.get(`${BASE_URL}/api/wishlist/get/item`)
        .then((res) => res.data)
})

export const addToWishlistRequest = createAsyncThunk('add/wishlist/items', async (body) => {
    return await axios.post(`${BASE_URL}/api/wishlist/add/item`, body)
        .then((res) => res)

})

export const deleteFromWishlistRequest = createAsyncThunk('delete/wishlist/items', async (id) => {
    return await axios.delete(`${BASE_URL}/api/wishlist/delete/item/${id}`)
        .then((res) => id)
})

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchAllWishlistItems.fulfilled, (state, action) => {
            return { ...state, loading: false, data: action.payload }
        })

        builder.addCase(fetchAllWishlistItems.rejected, (state, action) => {
            state.error = true
        })

        builder.addCase(addToWishlistRequest.fulfilled, (state, action) => {
            if (action.payload.status == 200) {
                return { ...state, loading: false, data: action.payload.data }
            } else if (action.payload.status == 203) {
                alert(action.payload.data)
                return { ...state, loading: false, error: action.payload.data }
            }
        })

        builder.addCase(addToWishlistRequest.rejected, (state, action) => {
            alert("Product already exist")
            console.log(action)
        })

        builder.addCase(deleteFromWishlistRequest.fulfilled, (state, action) => {
            state.data = state.data.filter((item) => item.product._id != action.payload)
        })
    }
})

export default wishlistSlice.reducer;