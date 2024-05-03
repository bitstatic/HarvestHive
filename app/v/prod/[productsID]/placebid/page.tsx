"use client"

import AppbarWMenu from '@/src/components/appbars/AppbarWMenu'
import { Listings } from '@/src/Interfaces'
import { zodResolver } from '@hookform/resolvers/zod'
import { Avatar, Box, Button, Paper, TextField, Typography } from '@mui/material'
import App from 'next/app'
import React from 'react'
import { useForm } from 'react-hook-form'
import {z} from 'zod'

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

const schema = z.object({
  amount : z.string().nonempty({ message: 'Amount is required'}).regex(/^\d+$/, { message: 'Amount should be a postive number'}).min(1, { message: 'Amount should be a postive number'}),
  yourbid : z.string().nonempty({ message: 'Amount is required'}).regex(/^\d+$/, { message: 'Amount should be a postive number'}).min(1, { message: 'Amount should be a postive number'}),
})

type FormFields = z.infer<typeof schema>

const page = async()=>{

    const { register, handleSubmit, formState: { errors } } = useForm<FormFields>({
      resolver: zodResolver(schema),
    })

    const onSubmit = async(data: FormFields) => {
      console.log(data);
    }
  let productData: Listings
  // fetching Data from server
  // try {
  //   await new Promise((resolve) => setTimeout(resolve, 1000))
  //   productData = serverData;
  // } catch (error) {
  //   console.error(error)
  // }

  return (
    <>
      <AppbarWMenu
        title="Product Page"
        primaryOption='back'
      />
      <Box className='flex flex-col gap-2 items-start p-4'>
      <Typography variant='h4' gutterBottom>
          Moong Dal
        </Typography>
        <Typography variant='body1'>
          Type: Lentils
        </Typography>
      </Box>
      <Box className='flex flex-col gap-4 items-start p-4'>
        <Avatar sx={{ width: 328, height: 184 }} variant='square' src='https://tiimg.tistatic.com/fp/3/007/889/1-kilogram-pack-size-food-grade-common-dried-yellow-moong-dal--071.jpg' />
      </Box>
      <Box className='flex flex-col gap-2 items-start p-4 '>
        <Typography variant='body1'>
          Shyaam Daddario
        </Typography>
        <Typography variant='body2'>
          Mandi Samiti, Raghogarh
        </Typography>
        
        <Box className='border-2 border-gray-400 p-4 mt-2 mb-2 w-full flex justify-between items-center'>
          <Typography variant='body1'>
            Last Highest Bid
          </Typography>
          <Typography variant='body1'>
          ₹ 450 /U
          </Typography>
        </Box>

        <Box className='border-2 border-gray-400 p-4 mt-2 mb-2 w-full flex justify-between items-center'>
          <Typography variant='body1'>
            STOCK
          </Typography>
          <Typography variant='body1'>
            500 U(1U=1Kg)
          </Typography>
        </Box>
        <Box className='p-4 w-full flex justify-between items-center'>
          <Typography variant='body2'>
            Buy At: 
          </Typography>
          <Paper className='p-1'>₹ 450 /U</Paper>
          <Typography variant='body2'>
            Highest Bid:
          </Typography>
          <Paper className='p-1'>₹ 500 /U</Paper>
        </Box>
        <Paper className='p-4 gap-4 cener-col w-full'>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                className="center-col gap-4 w-full"
              >
                <Box className="w-full">
                  <TextField
                    {...register('amount')}
                    label="Amount"
                    type="number"
                    variant="outlined"
                    fullWidth
                    error={errors.amount ? true : false}
                    helperText={errors.amount ? errors.amount.message : ''}
                  />
                </Box>
                <Box className="w-full">
                  <TextField
                    {...register('yourbid')}
                    label="Your Bid"
                    type="number"
                    variant="outlined"
                    fullWidth
                    error={errors.yourbid ? true : false}
                    helperText={errors.yourbid ? errors.yourbid.message : ''}
                />
                </Box>
                <Box className='w-full flex gap-4 justify-end'>
                    <Button type='submit' variant='contained' color='primary' >
                      PLACE BID
                    </Button>
                </Box>
            </Box>
        </Paper>

      </Box>
    </>
  )
}

export default page