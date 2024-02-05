import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

const CardCom = ({ isWishlist, product }) => {

    // https://th.bing.com/th/id/OIP.4Xv_eI6NtXzMxW6dInXuaQAAAA?rs=1&pid=ImgDetMain

    return (
        <div style={{ margin: '30px 0' }}>
            <Card sx={{ width: 270 }}>
                <CardMedia
                    component={'img'}
                    alt='Product Img'
                    height={200}
                    width={'100%'}
                    sx={{objectFit:'contain'}}
                    image={product?.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" sx={{textAlign:'center'}} component="div">
                        {product?.name?.slice(0,18)}...
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ₹ {product?.price}
                    </Typography>
                </CardContent>
                <CardActions sx={{display:'flex',justifyContent:'space-between'}}>
                    {!isWishlist && <Button size="small">Add cart</Button>}
                    {isWishlist ? <Button size="small">Remove from wishlist</Button> : <Button size="small">Add to wishlist</Button>}
                </CardActions>
            </Card>
        </div>
    )
}

export default CardCom