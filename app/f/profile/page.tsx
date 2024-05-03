import AppbarWMenu from '@/src/components/appbars/AppbarWMenu'
import { Listings } from '@/src/Interfaces'
import { Avatar, Box, Button, Paper, Rating, Typography } from '@mui/material'
import React, { Suspense } from 'react'
import MessageIcon from '@mui/icons-material/Message';
import ListingCard from '@/src/components/ListingCard';
import CurrentlyListed from '@/src/components/lists/CurrentlyListed';
import ListsSkeleton from '@/src/components/skeletons/ListsSkeleton';
import SoldList from '@/src/components/lists/SoldList';

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
        Shyamu Dodaria
      </Typography>
      <Rating defaultValue={3} readOnly />
      <Button variant='outlined' color='primary' href='#' endIcon={<MessageIcon/>}>
        CONTACT 
      </Button>
    </Box>

    <Box className="w-screen p-4 flex flex-col items-center  gap-4 ">
      {/* on sale */}
      <Suspense fallback={<ListsSkeleton />}>
        <CurrentlyListed />
      </Suspense>


      {/* Sold stock */}
      <Suspense fallback={<ListsSkeleton />}>
        <SoldList />
      </Suspense>
    </Box>

    </>
  )
}

export default page