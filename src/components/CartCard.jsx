import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { deleteFromCartRequest } from '../redux/cartSlice'


const CartCard = ({ product }) => {
    // console.log(product)
    const dispatch = useDispatch()

    const handleRemoveFromCart = async () => {
        dispatch(deleteFromCartRequest(product._id))
    }

    return (
        <Card sx={{ display: 'flex', alignItems: 'space-between', padding: '20px' }}>
            <CardMedia
                component="img"
                sx={{ width: 180, height: 180, objectFit: 'contain' }}
                image={product?.image}
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flex: '1', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography sx={{ maxWidth: '500px' }} component="div" variant="h5">
                        {product?.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        ₹ {product?.price}
                    </Typography>
                </CardContent>
                <CardActions >
                    <Button onClick={handleRemoveFromCart} sx={{ marginLeft: 'auto' }}>Remove from cart</Button>
                </CardActions>
            </Box>
        </Card>
    )
}

export default CartCard