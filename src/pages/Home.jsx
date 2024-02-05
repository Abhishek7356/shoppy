import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Card from '../components/Card'
import { Container } from '@mui/material'
import { getAllProducts } from '../services/allApi'

const Home = () => {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const res = await getAllProducts();
        console.log(res)
        setProducts(res.data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const allProductsList = products.map((item, index) => {
        return (
            <Card product={item} key={index} />
        )
    })

    return (
        <div>
            <Hero />
            <Container sx={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                {allProductsList}
            </Container>
        </div>
    )
}

export default Home