import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'


const CartCard = () => {
    return (
        <Card sx={{ display: 'flex', alignItems: 'space-between', padding: '20px' }}>
            <CardMedia
                component="img"
                sx={{ width: 180 }}
                image="https://th.bing.com/th/id/OIP.4Xv_eI6NtXzMxW6dInXuaQAAAA?rs=1&pid=ImgDetMain"
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex',flex:'1', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        Shoes
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        $ 120
                    </Typography>
                </CardContent>
                <CardActions >
                    <Button sx={{ marginLeft: 'auto' }}>Remove from cart</Button>
                </CardActions>
            </Box>
        </Card>
    )
}

export default CartCard