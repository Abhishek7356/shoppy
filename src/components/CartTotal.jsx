import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const CartTotal = () => {

    const cartItems = useSelector(state => state.cartReducer.data)

    return (
        <Card sx={{ width: '100%' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
                    Cart details
                </Typography>
                <hr />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6" component="div">
                        Total Items
                    </Typography>
                    <Typography variant="h6" component="div">
                        {cartItems.length}-Items
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6" component="div">
                        Delivery charge
                    </Typography>
                    <Typography variant="h6" component="div">
                        Free
                    </Typography>
                </Box>
                <hr />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6" component="div">
                        Total Price
                    </Typography>
                    <Typography variant="h6" component="div">
                        ₹ {cartItems.length > 0 ? cartItems?.map(item => item?.product?.price)?.reduce((a, b) => a + b) : 0}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions>
                <Button size="small" color='success' variant='outlined'>Place Order</Button>
            </CardActions>
        </Card>
    )
}

export default CartTotal