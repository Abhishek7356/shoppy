import { Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import CardCom from '../components/Card'
import { useSelector } from 'react-redux'

const Wishlist = () => {

    const wishListItems = useSelector(state => state.wishlistReducer.data)
    const scrollRef = useRef()

    useEffect(() => {
        scrollRef.current.scrollIntoView()
    }, [])

    const allWishlistItems = wishListItems.map((item, index) => {
        return (
            <Grid item xs={6} sm={4} md={3}>
                <CardCom isWishlist product={item.product} key={index} />
            </Grid>
        )
    })

    return (
        <div ref={scrollRef} style={{ padding: '100px 0', minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Container>
                {allWishlistItems.length > 0 && <Typography variant='h4' sx={{ display: 'flex', gap: '10px', borderBottom: '4px solid blue' }}>Your  <Typography variant='h4' color={"primary"}>Wishlist</Typography></Typography>}
                <Grid container spacing={2}>
                    {allWishlistItems.length > 0 ? allWishlistItems : <Typography variant='h4' sx={{ textAlign: 'center' }}>Wishlist is empty !</Typography>}
                </Grid>
            </Container>
        </div>
    )
}

export default Wishlist