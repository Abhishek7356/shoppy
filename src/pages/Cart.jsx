import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import CartCard from '../components/CartCard'
import CartTotal from '../components/CartTotal'
import { useSelector } from 'react-redux'

const Cart = () => {

    const cartItems = useSelector(state => state.cartReducer.data)
    const cartObj = useSelector(state => state.cartReducer)
    console.log(cartObj)
    const scrollRef = useRef()

    useEffect(() => {
        scrollRef.current.scrollIntoView()
    }, [])

    const allCartItems = cartItems.map((item, index) => {
        return (
            <CartCard product={item.product} key={index} />
        )
    })

    return (
        <div ref={scrollRef} style={{ padding: '100px 0', minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Container maxWidth='xl'>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={9} >
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: '1' }}>
                            {allCartItems.length > 0 ? allCartItems : <Typography variant='h4' sx={{ textAlign: 'center' }}>Cart is empty !</Typography>}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <CartTotal />
                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}

export default Cart