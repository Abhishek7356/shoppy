import { Container, Typography } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import CardCom from '../components/Card'

const Wishlist = () => {

    const scrollRef = useRef()

    useEffect(() => {
        scrollRef.current.scrollIntoView()
    }, [])

    return (
        <div ref={scrollRef} style={{ padding: '100px 0', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

            <Container>
                <Typography variant='h4' sx={{ display: 'flex', gap: '10px', borderBottom: '4px solid blue' }}>Your  <Typography variant='h4' color={"primary"}>Wishlist</Typography></Typography>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
                    <CardCom isWishlist />
                    <CardCom isWishlist />
                    <CardCom isWishlist />
                    <CardCom isWishlist />
                    <CardCom isWishlist />
                </div>
            </Container>
        </div>
    )
}

export default Wishlist