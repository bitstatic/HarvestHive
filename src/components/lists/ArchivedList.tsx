import { Paper, Typography } from '@mui/material'
import React from 'react'
import ListingCard from '../ListingCard'

const ArchivedList = () => {
  return (
    <Paper className='p-3 gap-2 w-full' sx={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Typography variant='h5' gutterBottom>Archived Listings </Typography>
      <Paper 
        elevation={0}
        className='p-3 w-full' 
        sx={{
          border: 1,
          borderColor: 'divider',
        }}>
        <Typography variant='body1' className='w-full text-center'>No Archived Listings</Typography>
      </Paper>
    </Paper>
  )
}

export default ArchivedList