import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit'
import axios from 'axios';
import { BASE_URL } from './baseUrl';


const initialState = {
    loading: true,
    data: [],
    error: ""
}

export const fetchAllCartItems = createAsyncThunk('fetch/cart/items', async () => {
    return await axios.get(`${BASE_URL}/api/cart/get/item`)
        .then((res) => res.data)
})

export const addTocartRequest = createAsyncThunk('add/cart/items', async (body) => {
    return await axios.post(`${BASE_URL}/api/cart/add/item`, body)
        .then((res) => res)
})

export const deleteFromCartRequest = createAsyncThunk('delete/cart/items', async (id) => {
    return await axios.delete(`${BASE_URL}/api/cart/delete/item/${id}`)
        .then((res) => id)
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchAllCartItems.fulfilled, (state, action) => {
            return { ...state, loading: false, data: action.payload }
        })

        builder.addCase(addTocartRequest.fulfilled, (state, action) => {
            if (action.payload.status == 200) {
                return { ...state, loading: false, data: action.payload }
            } else if (action.payload.status == 203) {
                alert(action.payload.data)
                return { ...state, loading: false, error: action.payload.data }
            }
        })
        builder.addCase(addTocartRequest.rejected, (state, action) => {
            alert("Something went wrong !")
            console.log(action)
        })

        builder.addCase(deleteFromCartRequest.fulfilled, (state, action) => {
            state.data = state.data.filter((item) => item.product._id != action.payload)
        })
    }
})

export default cartSlice.reducer;