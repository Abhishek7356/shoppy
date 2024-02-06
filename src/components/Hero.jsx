import { Box } from '@mui/material'
import React from 'react'

const Hero = () => {
  return (
    <div>
      <Box
        component={'img'}
        sx={{ width: '100vw', height: { sm: '100vh',xs:'40vh' }, objectFit: 'cover' }}
        src="https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/2614577/910/607/m1/fpnw/wm0/preview_02-.jpg?1493457806&s=9b7ccd1dd11338204940b0f1eae13a42"
        alt="" />
    </div>
  )
}

export default Hero