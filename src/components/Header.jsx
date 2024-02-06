import React, { useEffect, useState } from 'react'
import { AppBar, Badge, Box, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCartItems } from '../redux/cartSlice';
import { fetchAllWishlistItems } from '../redux/wishlistSlice';

const Header = () => {

    const cartList = useSelector(state => state.cartReducer)
    const wishLists = useSelector(state => state.wishlistReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllCartItems())
        dispatch(fetchAllWishlistItems())
    }, [])

    return (
        <div>
            <AppBar sx={{ width: '100vw' }}>
                <Toolbar>
                    <Link to={'/'} style={{ color: 'inherit', textDecoration: 'none' }}><Typography
                        variant='h5'
                        sx={{
                            mr: 2,
                            display: 'flex',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Shoppy
                    </Typography></Link>
                    <Box sx={{ marginLeft: 'auto', display: 'flex', gap: '30px' }}>
                        <Badge badgeContent={cartList.length} color="error">
                            <Link to={'/cart'} style={{ color: 'inherit' }}><ShoppingCartIcon /></Link>
                        </Badge>
                        <Badge badgeContent={wishLists.length} color="error">
                            <Link to={'/wishlist'} style={{ color: 'inherit' }}><FavoriteIcon /></Link>
                        </Badge>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header