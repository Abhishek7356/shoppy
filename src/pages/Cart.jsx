import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import CartCard from '../components/CartCard'
import CartTotal from '../components/CartTotal'

const Cart = () => {


    const scrollRef = useRef()

    useEffect(() => {
        scrollRef.current.scrollIntoView()
    }, [])

    return (
        <div ref={scrollRef} style={{ padding: '100px 0', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Container maxWidth='large' sx={{ display: 'flex', alignItems: 'start', gap: '10px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: '1' }}>
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                </Box>
                <CartTotal />
            </Container>
        </div>
    )
}

export default Cart