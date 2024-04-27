import { Box, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import Logo from '@/Components/logo'    
import Image from 'next/image'

const auth = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30vh',
        marginBottom: '20vh',
      }}>
        <Image priority src="/logo.svg" alt="logo" width={155} height={155} />
        <Typography variant="h1" sx={{
          marginTop: '2rem',
        }}>
          Harverst Hive
  	    </Typography>
      </Box>
    </Container>
  )
}

export default auth