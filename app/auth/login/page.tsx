import {
  Box,
  Button,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import React from 'react'
import Logo from '@/src/components/Logo'
import Link from 'next/link'
import VisibilityIcon from '@mui/icons-material/Visibility'

const login = () => {
  return (
    <Box
      maxWidth="sm"
      className="h-screen flex flex-col p-4 pt-12 justify-start mx-auto"
    >
      <Logo />
      <Paper className="p-4 pt-8 center-col gap-6">
        <Typography className="" variant="h5">
          Login to your Account
        </Typography>
        <Box
          component="form"
          className="w-full flex flex-col items-center gap-4"
        >
          <TextField label="email" variant="outlined" className="w-full" />
          <TextField label="password" variant="outlined" className="w-full" />
          {/* <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VisibilityIcon />
                </InputAdornment>
              ),
            }}
          /> */}
        </Box>
        <Box className="center-col gap-2.5">
          <Button variant="contained" className="w-fit">
            Login
          </Button>
          <Link href="#">
            <Typography variant="body2">Forgot Password?</Typography>
          </Link>
        </Box>
        <Link href="#">
          <Typography variant="body2">
            Don't have an account? Sign up
          </Typography>
        </Link>
      </Paper>
    </Box>
  )
}

export default login
