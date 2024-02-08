import './App.css';
import { Typography, Button, TextField, Container, Box } from '@mui/material'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';

function App() {
  return (
    <>
      <Box sx={{minHeight:'100vh',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<Wishlist />} />
        </Routes>
        <Footer />
      </Box>
    </>
  );
}

export default App;
