import { Box, Card, Skeleton, Typography } from '@mui/material'
import React from 'react'

const ListsSkeleton = ({noHeading=false}: {noHeading?:boolean}) => {
  return (
    <Card
      className='w-full p-3 flex-col gap-2'
      sx={{
        display: 'flex',
        border: 2,
        borderColor: 'divider',
      }}>
      {!noHeading && <Typography variant="h5" gutterBottom><Skeleton width={100} /></Typography>}
      {[...Array(4)].map((el, index)=>(
      <Box key={index} className='w-full flex gap-2 items-center'>
        <Box className='w-[30%] max-w-[6.5rem] aspect-square'>
          <Skeleton variant='circular' sx={{
            width: '100%',
            height: '100%',
          }}/>
        </Box>
        <Box className='flex-col gap-2 w-full h-full justify-center'>
          <Typography variant="h6"><Skeleton /></Typography>
          <Typography variant="caption"><Skeleton /></Typography>
          <Typography variant="body1"><Skeleton className='w-full'/></Typography>
        </Box>
      </Box>))}
    </Card>
  )

}

export default ListsSkeleton