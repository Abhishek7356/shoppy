import { commonApi } from "./commonApi"
import { BASE_URL } from "./serverUrl"

//fetch all products
export const getAllProducts = async () => {
    return await commonApi('get', `${BASE_URL}/api/get/products`, '')
}