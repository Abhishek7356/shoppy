import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit'
import { addwishlistItem, deleteWishlistItem, getAllWishlistItems } from '../services/allApi';


const initialState = [];

export const fetchAllWishlistItems = createAsyncThunk('fetch/wishlist/items', async () => {
    const res = await getAllWishlistItems();
    // console.log(res)
    if (res.status == 200) {
        return res.data
    }
})

export const addToWishlistRequest = createAsyncThunk('add/wishlist/items', async (body) => {
    // console.log(body)
    const res = await addwishlistItem(body);
    console.log(res)
    if (res.status == 200) {
        return body
    }
})

export const deleteFromWishlistRequest = createAsyncThunk('delete/wishlist/items', async (id) => {
    const res = await deleteWishlistItem(id);
    console.log(res)
    if (res.status == 200) {
        return id
    }
})

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        // createWishlist: (state, action) => {
        //     return action.payload.map((item) => {
        //         return item.product
        //     })
        // },
        // addToWishlist: (state, action) => {
        //     if (!state.some(item => item._id == action.payload._id)) {
        //         state.push(action.payload)
        //     } else {
        //         alert("already exist in your wishlist")
        //     }
        // },
        // deleteWishlistProduct: (state, action) => {
        //     return state.filter((item) => item._id != action.payload)
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllWishlistItems.fulfilled, (state, action) => {
            return action.payload.map(item => item.product)
        })

        builder.addCase(addToWishlistRequest.fulfilled, (state, action) => {
            if (!state.some(item => item._id == action.payload._id)) {
                state.push(action.payload)
            } else {
                alert("already exist")
            }
        })

        builder.addCase(deleteFromWishlistRequest.fulfilled, (state, action) => {
            return state.filter((item) => item._id != action.payload)
        })
    }
})

export default wishlistSlice.reducer;