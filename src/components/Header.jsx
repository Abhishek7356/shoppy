import React from 'react'
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Link to={'/'} style={{ color: 'inherit',textDecoration:'none' }}><Typography
                        variant='h5'
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Shoppy
                    </Typography></Link>
                    <div style={{ marginLeft: 'auto' }}>
                        <Link to={'/cart'} style={{ color: 'inherit' }}><Button color="inherit">Cart</Button></Link>
                        <Link to={'/wishlist'} style={{ color: 'inherit' }}><Button color="inherit">Wishlist</Button></Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header