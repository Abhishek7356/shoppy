import { commonApi } from "./commonApi"
import { BASE_URL } from "./serverUrl"

//fetch all products
export const getAllProducts = async () => {
    return await commonApi('get', `${BASE_URL}/api/get/products`, '')
}

//fetch all cart items
export const getAllCartItems = async () => {
    return await commonApi('get', `${BASE_URL}/api/get/cart/item`, '')
}

//add cart item
export const addCartItem = async (body) => {
    return await commonApi('post', `${BASE_URL}/api/add/cart/item`, body)
}

//delete cart item
export const deleteCartItem = async (id) => {
    return await commonApi('delete', `${BASE_URL}/api/delete/cart/item/${id}`, {})
}

//fetch all wishlist items
export const getAllWishlistItems = async () => {
    return await commonApi('get', `${BASE_URL}/api/get/wishlist/item`, '')
}

//add wishlist item
export const addwishlistItem = async (body) => {
    return await commonApi('post', `${BASE_URL}/api/add/wishlist/item`, body)
}

//delete cart item
export const deleteWishlistItem = async (id) => {
    return await commonApi('delete', `${BASE_URL}/api/delete/wishlist/item/${id}`, {})
}