import AppbarWMenu from '@/src/components/appbars/AppbarWMenu'
import ListingCard from '@/src/components/ListingCard'
import { Listings } from '@/src/Interfaces'
import { Avatar, Box, Paper, Rating, Typography } from '@mui/material'
import React from 'react'

const demoDataArray: Listings[] = [
  {
    listingID: '1',
    title: 'Demo Listing',
    type: 'Demo Type',
    status: 'Demo Status',
    thumbnailURL: '/ListingPlaceholder.png',
    seller: {
      id: '1',
      name: 'Demo Seller',
      email: '',
    },
    sellerEarning: 45623,
    listedbuy: 100,
    MSP: 80,
    highestBid: 120,
    listedQuantity: 10,
    soldQuantity: 5,
    PickupDate: '2022-12-31',
    hasMyBid: false,
    myOrders: {
      productID: '1',
      productTitle: 'Demo Product',
      seller: 'Demo Seller',
      // bidPrice: 120,
      buyPrice: 100,
      status: 'Processed Status',
      OrderQuantity: 5,
      PickupDate: '2022-12-31',
    },
  },
  {
    listingID: '2',
    title: 'Demo Listing',
    type: 'Demo Type',
    status: 'Demo Status',
    thumbnailURL: '/ListingPlaceholder.png',
    seller: {
      id: '1',
      name: 'Demo Seller',
      email: '',
    },
    sellerEarning: 45623,
    listedbuy: 100,
    MSP: 80,
    highestBid: 120,
    listedQuantity: 10,
    soldQuantity: 5,
    PickupDate: '2022-12-31',
    hasMyBid: false,
    myOrders: {
      productID: '1',
      productTitle: 'Demo Product',
      seller: 'Demo Seller',
      // bidPrice: 120,
      buyPrice: 100,
      status: 'Processed Status',
      OrderQuantity: 5,
      PickupDate: '2022-12-31',
    },
  },
  {
    listingID: '3',
    title: 'Demo Listing',
    type: 'Demo Type',
    status: 'Demo Status',
    thumbnailURL: '/ListingPlaceholder.png',
    seller: {
      id: '1',
      name: 'Demo Seller',
      email: '',
    },
    sellerEarning: 45623,
    listedbuy: 100,
    MSP: 80,
    highestBid: 120,
    listedQuantity: 10,
    soldQuantity: 5,
    PickupDate: '2022-12-31',
    hasMyBid: false,
    myOrders: {
      productID: '1',
      productTitle: 'Demo Product',
      seller: 'Demo Seller',
      // bidPrice: 120,
      buyPrice: 100,
      status: 'Processed Status',
      OrderQuantity: 5,
      PickupDate: '2022-12-31',
    },
  },
  {
    listingID: '4',
    title: 'Demo Listing',
    type: 'Demo Type',
    status: 'Demo Status',
    thumbnailURL: '/ListingPlaceholder.png',
    seller: {
      id: '1',
      name: 'Demo Seller',
      email: '',
    },
    sellerEarning: 45623,
    listedbuy: 100,
    MSP: 80,
    highestBid: 120,
    listedQuantity: 10,
    soldQuantity: 5,
    PickupDate: '2022-12-31',
    hasMyBid: false,
    myOrders: {
      productID: '1',
      productTitle: 'Demo Product',
      seller: 'Demo Seller',
      // bidPrice: 120,
      buyPrice: 100,
      status: 'Processed Status',
      OrderQuantity: 5,
      PickupDate: '2022-12-31',
    },
  }
]


const page = () => {

  return (
    <>
    <AppbarWMenu
      title="Previous Orders"
      primaryOption='back'
    />
    <Box
      className='flex flex-col mt-8 gap-4 items-center'
    >
      <Avatar alt='Demo Seller' src='/ListingPlaceholder.png' sx={{ width: 57, height: 57 }} />
      <Typography variant='h4'>
        Reliance Fresh
      </Typography>
      <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
    </Box>
    <Box className="w-screen p-4">
      <Paper className='p-3 gap-2' sx={{
        display: 'flex',
        flexDirection: 'column',
      }
    }>
      <Typography variant='h5'>Purchase History </Typography>
      {demoDataArray.map((listingData, index) => (
        <ListingCard key={index} listingData={listingData} variant={'vendor'} sold />
      ))}
      </Paper>
    </Box>
    </>
  )
}

export default page