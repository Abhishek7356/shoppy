import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import CartCard from '../components/CartCard'
import CartTotal from '../components/CartTotal'
import { useSelector } from 'react-redux'

const Cart = () => {

    const cartItems = useSelector(state => state.cartReducer)
    const scrollRef = useRef()

    useEffect(() => {
        scrollRef.current.scrollIntoView()
    }, [])

    const allCartItems = cartItems.map((item, index) => {
        return (
            <CartCard product={item} key={index} />
        )
    })

    return (
        <div ref={scrollRef} style={{ padding: '100px 0', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Container maxWidth='large' sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' }, alignItems: 'start', gap: '10px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: '1' }}>
                    {allCartItems.length > 0 ? allCartItems : <Typography variant='h4' sx={{ textAlign: 'center'}}>Cart is empty !</Typography>}
                </Box>
                <CartTotal />
            </Container>
        </div>
    )
}

export default Cart