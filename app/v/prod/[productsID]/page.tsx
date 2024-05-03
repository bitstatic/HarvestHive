import { Listings } from '@/src/Interfaces'
import React from 'react'

const serverData: Listings = {
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
}

const page = async () => {
  let productData: Listings
  // fetching Data from server
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    productData = serverData;
  } catch (error) {
    console.error(error)
  }

  return (
    <div>page</div>
  )
}

export default page