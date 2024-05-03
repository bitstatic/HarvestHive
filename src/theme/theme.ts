'use client'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#67A438',
    },
    secondary: {
      main: '#B3E271',
      contrastText: '#0A2919',
    },
    error: {
      main: '#C63939',
    },
    warning: {
      main: '#D77C28',
    },
    info: {
      main: '#3D6CC7',
    },
    success: {
      main: '#7ECE40',
      contrastText: '#0A2919',
    },
    background: {
      default: '#EAFBF1',
      paper: '#F4FEF8',
    },
    text: {
      primary: '#04110BDE',
      secondary: '#04110B8A',
      disabled: '#04110B61',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
})

export default theme
