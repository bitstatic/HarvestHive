import { Listings } from '@/src/Interfaces'
import { Box, Card, Skeleton, Typography } from '@mui/material'
import React, { Suspense } from 'react'
import ListingCard from '../ListingCard'

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

const PurchaseHistory = async () => {
  // Fetch Purchase History
  let purchaseHistory: Listings[];
  try{
    await new Promise((resolve) => setTimeout(resolve, 3000))
    purchaseHistory = demoDataArray;
  } catch {
    purchaseHistory = [];
  }
  return (
    <Card
      className='w-full p-3 flex-col gap-2'
      sx={{
        display: 'flex',
      }}>
      <Typography variant="h5" gutterBottom>Purchase History</Typography>
      {/* <Box> */}
        {purchaseHistory.map((listing) => (<ListingCard key={listing.listingID} listingData={listing} variant='vendor' sold/>))}
      {/* </Box> */}
    </Card>
  )
}

export default PurchaseHistory