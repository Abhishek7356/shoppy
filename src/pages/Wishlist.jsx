import { Container, Typography } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import CardCom from '../components/Card'
import { useSelector } from 'react-redux'

const Wishlist = () => {

    const wishListItems = useSelector(state => state.wishlistReducer)
    const scrollRef = useRef()

    useEffect(() => {
        scrollRef.current.scrollIntoView()
    }, [])

    const allWishlistItems = wishListItems.map((item, index) => {
        return (
            <CardCom isWishlist product={item} key={index} />
        )
    })

    return (
        <div ref={scrollRef} style={{ padding: '100px 0', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

            <Container>
                {allWishlistItems.length > 0 && <Typography variant='h4' sx={{ display: 'flex', gap: '10px', borderBottom: '4px solid blue' }}>Your  <Typography variant='h4' color={"primary"}>Wishlist</Typography></Typography>}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
                    {allWishlistItems.length > 0 ? allWishlistItems : <Typography variant='h4' sx={{ textAlign: 'center' }}>Wishlist is empty !</Typography>}
                </div>
            </Container>
        </div>
    )
}

export default Wishlist