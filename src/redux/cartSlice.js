import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addCartItem, deleteCartItem, getAllCartItems } from '../services/allApi';


const initialState = [];

export const fetchAllCartItems = createAsyncThunk('fetch/cart/items', async () => {
    const res = await getAllCartItems();
    console.log(res)
    if (res.status == 200) {
        return res.data
    }
})

export const addTocartRequest = createAsyncThunk('add/cart/items', async (body) => {
    // console.log(body)
    const res = await addCartItem(body);
    console.log(res)
    if (res.status == 200) {
        return body
    }
})

export const deleteFromCartRequest = createAsyncThunk('delete/cart/items', async (id) => {
    const res = await deleteCartItem(id);
    console.log(res)
    if (res.status == 200) {
        return id
    }
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    // reducers: {
    //     createCart: (state, action) => {
    //         return action.payload.map((item) => {
    //             return item.product
    //         })
    //     },
    //     addToCart: (state, action) => {
    //         if (!state.some(item => item._id == action.payload._id)) {
    //             state.push(action.payload)
    //         } else {
    //             alert("already exist")
    //         }
    //     },
    //     deleteCartProduct: (state, action) => {
    //         return state.filter((item) => item._id != action.payload)
    //     }
    // },
    extraReducers: (builder) => {
        builder.addCase(fetchAllCartItems.fulfilled, (state, action) => {
            return action.payload.map(item => item.product)
        })

        builder.addCase(addTocartRequest.fulfilled, (state, action) => {
            if (!state.some(item => item._id == action.payload._id)) {
                state.push(action.payload)
            } else {
                alert("already exist")
            }
        })

        builder.addCase(deleteFromCartRequest.fulfilled, (state, action) => {
            return state.filter((item) => item._id != action.payload)
        })
    }
})

export default cartSlice.reducer;