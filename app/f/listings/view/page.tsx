import AppbarWMenu from '@/src/components/appbars/AppbarWMenu'
import ListingCard from '@/src/components/ListingCard'
import { Listings } from '@/src/Interfaces'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import { Box, Card, Paper, Typography } from '@mui/material'
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
      title="HarvestHive"
      primaryOption='drawer'
    />
    <Box className="w-screen p-4">
      <Typography variant='h5' className='p-3'>Selling List: </Typography>
      <Paper className='p-3 gap-2' sx={{
          display: 'flex',
          flexDirection: 'column',
        }
      }>
        {demoDataArray.map((listingData, index) => (
          <ListingCard key={index} listingData={listingData} variant={'farmer'} />
        ))}
        </Paper>
    </Box>
  </>
  )
}

export default page