import React, { useEffect, useState } from 'react'
import { AppBar, Badge, Box, Button, Tab, Tabs, Toolbar, Typography, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCartItems } from '../redux/cartSlice';
import { fetchAllWishlistItems } from '../redux/wishlistSlice';

const Header = () => {

    const cartList = useSelector(state => state.cartReducer.data)
    const wishLists = useSelector(state => state.wishlistReducer.data)
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
                        <Link to={'/cart'} style={{ color: 'inherit' }}>
                            <IconButton color='inherit'>
                                <Badge badgeContent={cartList.length} color="error">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        </Link>
                        <Link to={'/wishlist'} style={{ color: 'inherit' }}>
                            <IconButton color='inherit'>
                                <Badge badgeContent={wishLists.length} color="error">
                                    <FavoriteIcon />
                                </Badge>
                            </IconButton>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </div >
    )
}

export default Header