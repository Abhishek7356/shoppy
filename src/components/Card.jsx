import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addTocartRequest } from '../redux/cartSlice'
import { addToWishlistRequest, deleteFromWishlistRequest } from '../redux/wishlistSlice'

const CardCom = ({ isWishlist, product }) => {

    const dispatch = useDispatch()

    const handleAddToCart = async () => {
        dispatch(addTocartRequest(product))
    }

    const handleAddToWishlist = async () => {
        dispatch(addToWishlistRequest(product))
    }

    const handleDeleteFromWishlist = async () => {
        dispatch(deleteFromWishlistRequest(product._id))
    }

    return (
        <div style={{ margin: '30px 0' }}>
            <Card sx={{ width: { xs: '92vw', sm: 270 } }}>
                <CardMedia
                    component={'img'}
                    alt='Product Img'
                    height={200}
                    width={'100%'}
                    sx={{ objectFit: 'contain' }}
                    image={product?.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" sx={{ textAlign: 'center' }} component="div">
                        {product?.name?.slice(0, 18)}...
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ₹ {product?.price}
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {!isWishlist && <Button onClick={handleAddToCart} size="small">Add to cart</Button>}
                    {isWishlist ? <Button onClick={handleDeleteFromWishlist} size="small">Remove from wishlist</Button> : <Button onClick={handleAddToWishlist} size="small">Add to wishlist</Button>}
                </CardActions>
            </Card>
        </div>
    )
}

export default CardCom