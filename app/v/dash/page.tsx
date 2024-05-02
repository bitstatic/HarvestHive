import { Listings } from '@/src/Interfaces'
import AppbarWMenu from '@/src/components/appbars/AppbarWMenu'
import ListingCard from '@/src/components/ListingCard'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import { Box, Card, Typography } from '@mui/material'
import React from 'react'

// write a demo data for Listings
const demoData: Listings = {
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
    seller: 'Demo Seller',
    // bidPrice: 120,
    buyPrice: 100,
    status: 'Processed Status',
    OrderQuantity: 5,
    PickupDate: '2022-12-31',
  },
}

export const LastBids = async () => {
  // Fetch the Last Bids

  return (
    <Card
      className="p-3 gap-4"
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h5">Last Bids</Typography>
    </Card>
  )
}

const page = () => {
  return (
    <>
      <AppbarWMenu
        title="HarvestHive"
        startIcon={<MenuRoundedIcon />}
        endIcon={<SearchRoundedIcon />}
        endHref="/v/dash/search"
      />
      <Box className="w-screen p-4">
        {/* <LastBids /> */}
        {/* <ListingCard listingData={demoData} variant={'farmer'} sold/> */}
      </Box>
    </>
  )
}

export default page
