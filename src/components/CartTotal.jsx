import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'

const CartTotal = () => {
    return (
        <Card sx={{ minWidth: 350 }}>
            <CardContent sx={{display:'flex',flexDirection:'column',gap:'20px'}}>
                <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
                    Cart details
                </Typography>
                <hr />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6" component="div">
                        Items
                    </Typography>
                    <Typography variant="h6" component="div">
                        3-Items
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
                        $120
                    </Typography>
                </Box>
            </CardContent>
            <CardActions>
                <Button variant="contained" size="small" color='primary'>Place Order</Button>
            </CardActions>
        </Card>
    )
}

export default CartTotal