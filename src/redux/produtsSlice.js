import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from './baseUrl'

const initialState = {
    loading: true,
    data: [],
    error: false
}
export const fetchAllProducts = createAsyncThunk('fetch/all/products', async () => {
    return await axios.get(`${BASE_URL}/api/product/get`)
        .then((res) => res.data)
        .catch((err) => isRejectedWithValue(err.message))
})

const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            return { ...state, loading: false, data: action.payload }
        })

        builder.addCase(fetchAllProducts.rejected, (state, action) => {
            state.error = true
        })
    }
});

export default productSlice.reducer;