import { Box, Button, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'

const auth = () => {
  return (
    <Container maxWidth="sm" className="h-screen">
      <Box className="h-screen flex flex-col justify-center items-center gap-12">
        <Box className="flex flex-col justify-center items-center gap-4">
          <Image priority src="/Logo.svg" alt="logo" width={155} height={155} />
          <Typography variant="h3" className="">
            Harverst Hive
          </Typography>
          {/* TODO add a modal window for  below button*/}
        </Box>
        <Button variant="contained" color="primary" href="/auth/login">
          GET STARTED
        </Button>
      </Box>
    </Container>
  )
}

export default auth
