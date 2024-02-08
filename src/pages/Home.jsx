import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Card from '../components/Card'
import { Box, Container, Grid, Skeleton, Stack } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/produtsSlice'

const Home = () => {

    // const [products, setProducts] = useState([]);
    const products = useSelector(state => state.productsReducer.data);
    const isLoading = useSelector(state => state.productsReducer.loading);
    const numberOfSkeletons = [1, 2, 3, 4, 5, 6, 7, 8]
    const dispatch = useDispatch()
    // console.log(products)
    
    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [])

    const allProductsList = products.map((item, index) => {
        return (
            <Grid item xs={6} sm={4} md={3}  >
                <Card product={item} key={index} />
            </Grid>
        )
    })
    const loadingSkeletons = numberOfSkeletons.map((item, index) => {
        return (
            <Grid item xs={6} sm={4} md={3}  >
                <Box>
                    <Skeleton variant="rectangular" width={'100%'} height={148} animation='wave' />
                    <Box sx={{ pt: 0.5 }}>
                        <Skeleton animation='wave' />
                        <Stack spacing={3} direction={'row'}>
                            <Skeleton width="50%" animation='wave' />
                            <Skeleton width="50%" animation='wave' />
                        </Stack>
                    </Box>
                </Box>
            </Grid>
        )
    })

    return (
        <div>
            <Hero />
            <Container>
                <Grid container spacing={2}>
                    {isLoading ? loadingSkeletons : allProductsList}
                </Grid>
            </Container>
        </div>
    )
}

export default Home