import React from 'react'
import ListingCard from '../ListingCard'
import { Paper, Typography } from '@mui/material'
import { Listings } from '@/src/Interfaces'

const serverData: Listings[] = [
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

const CurrentlyListed = async () => {
  // fetch stuff from the server
  let demoDataArray: Listings[]
  try {
    await new Promise((resolve, reject) => setTimeout(resolve, 2000))
    demoDataArray = serverData;
  } catch {
    demoDataArray = []
  }

  return (
    <>
      <Paper className='p-3 gap-2 w-full' sx={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Typography variant='h5' gutterBottom>Crops on Sale </Typography>
        {demoDataArray.map((listingData, index) => (
          <ListingCard key={index} listingData={listingData} variant={'farmer'} />
        ))}
      </Paper>
    </>
  )
}

export default CurrentlyListed