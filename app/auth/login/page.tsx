import { Box, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import Logo from '@/src/components/Logo'

const login = () => {
  return (
    <Container maxWidth="sm">
      <Logo />
      <div >
        askda
      </div>
      <Paper className='px-2' 
        sx={{ 
          background: "#F7FEFA" ,
      }} >
        <Typography variant="h5" component="h4" sx={{ 
          textAlign: 'center',
        }}>
          Login to your Account 
        </Typography> 
      </Paper>
    </Container>
  )
}

export default login