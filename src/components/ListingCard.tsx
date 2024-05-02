import React from 'react'
import { Listings } from '@/src/Interfaces'
import { Box, Card, Typography } from '@mui/material'
import Image from 'next/image'
import ListingPlaceholder from '/public/ListingPlaceholder.png'

const ListingCard = ({
  variant = 'farmer',
  sold = false,
  listingData,
}: {
  listingData: Listings
  variant?: 'farmer' | 'vendor'
  sold?: boolean
}) => {
  // listings are passed from parent component
  return (
    <Card
      elevation={0}
      className="p-2 gap-2 items-center"
      sx={{
        display: 'flex',
        border: 1,
        borderColor: 'text.disabled'
      }}
    >
      <Box
        className="w-[30%] max-w-[6.5rem] relative aspect-square rounded-full"
        sx={{
          borderWidth: 1,
        }}
      >
        <Image
          src={
            listingData?.thumbnailURL
              ? listingData?.thumbnailURL
              : ListingPlaceholder
          }
          placeholder="blur"
          blurDataURL="/ListingPlaceholder.png"
          fill={true}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          alt="Listings Image"
        />
      </Box>
      <Box className="grow flex flex-col items-start relative">
        <Typography variant="h6">{listingData.title}</Typography>
        {variant == 'vendor' && (
          <Typography variant="caption">{listingData.seller.name}</Typography>
        )}
        {variant == 'farmer' && (
          <Typography variant="caption">
            Delivery: {listingData.PickupDate}
          </Typography>
        )}
        <Box className="w-full flex justify-between flex-wrap gap-x-3">
          <Typography variant="body1">
            Stock:{' '}
            {listingData.listedQuantity -
              (listingData?.soldQuantity ? listingData?.soldQuantity : 0)}
          </Typography>
          {!sold && (
            <Typography variant="body1">
              Buy Price: {listingData.listedbuy}
            </Typography>
          )}
          {variant == 'vendor' && sold && (
            <Typography variant="body1">
              Price: {listingData.myOrders?.buyPrice}
            </Typography>
          )}
          {variant == 'farmer' && sold && (
            <Typography variant="body1">
              Earnings: {listingData?.sellerEarning}
            </Typography>
          )}
        </Box>
        <Box className="w-full flex justify-between flex-wrap gap-x-3">
          {!sold && (
            <Typography variant="body2">
              Highest Bid:{' '}
              {listingData?.highestBid ? listingData?.highestBid : '-'}
            </Typography>
          )}
          {variant == 'farmer' && !sold && (
            <Typography variant="body2">MSP: {listingData.MSP}</Typography>
          )}
          {variant == 'vendor' && !sold && (
            <Typography variant="body2">
              My Bid:{' '}
              {listingData?.hasMyBid ? listingData?.myOrders?.bidPrice : '-'}
            </Typography>
          )}
        </Box>
      </Box>
    </Card>
  )
}

export default ListingCard
