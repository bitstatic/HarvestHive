import { LastUserBids, Listings } from '@/src/Interfaces'
import AppbarWMenu from '@/src/components/appbars/AppbarWMenu'
import ListingCard from '@/src/components/ListingCard'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import { Avatar, Box, Card, Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { Suspense } from 'react'
import PurchaseHistory from '@/src/components/lists/PurchaseHistory'
import ListsSkeleton from '@/src/components/skeletons/ListsSkeleton'

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
    productTitle: 'Demo Product',
    seller: 'Demo Seller',
    // bidPrice: 120,
    buyPrice: 100,
    status: 'Processed Status',
    OrderQuantity: 5,
    PickupDate: '2022-12-31',
  },
}

const lastBids = {
  userID: '1',
  orders: [
    {
      productID: '1',
      productTitle: 'Demo Product',
      seller: 'Demo Seller1',
      bidPrice: 120,
      status: 'Processed Status2',
      OrderQuantity: 5,
      PickupDate: '2022-12-31',
    },
    {
      productID: '2',
      productTitle: 'Demo Product',
      seller: 'Demo Seller3',
      bidPrice: 120,
      status: 'Processed Status',
      OrderQuantity: 5,
      PickupDate: '2022-12-31',
    },
    {
      productID: '3',
      productTitle: 'Demo Product',
      seller: 'Demo Seller',
      bidPrice: 120,
      status: 'Processed Status',
      OrderQuantity: 5,
      PickupDate: '2022-12-31',
    },
  ],

}

const LastBids = async () => {
  // Fetch the Last Bids
  let lastBidData: LastUserBids
  try{
    // promise that stalls the return for 1 second
    await new Promise((resolve) => setTimeout(resolve, 3000))
    lastBidData=lastBids;
  } catch {
    lastBidData = {
      userID: '1',
      orders: [],
      //   productID: string;
      //   seller: string;
      //   bidPrice: number;
      //   status: string;
      //   OrderQuantity: number;
      //   PickupDate: string;
    }
  }

  const rows = lastBidData.orders.slice(0,6).map((order)=> ({
    productTitle: order.productTitle,
    bidPrice: order?.bidPrice,
    OrderQuantity: order.OrderQuantity,
  }))

  return (
    <>
      {lastBidData.orders?.length>0?<Paper
        className="w-full p-3 gap-4"
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
        >
        <Typography variant="h5">Last Bids</Typography>
        <TableContainer>
          <Table aria-label="Last 5 bids table" size='small'>
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell align='right'>Bid(₹)</TableCell>
                <TableCell align='right'>Stock(10kg)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row)=>(
                <TableRow key={row.productTitle}>
                  <TableCell>{row.productTitle}</TableCell>
                  <TableCell align='right'>{row.bidPrice}</TableCell>
                  <TableCell align='right'>{row.OrderQuantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>:null}
    </>
  )
}

const LastBidsSkeleton = ()=>{
  return (
    <Paper 
      className='w-full p-3 gap-2' 
      sx={{
        display: 'flex',
        flexDirection: 'column',
    }}>
      <Typography variant="h5"><Skeleton animation='wave' width={125}/></Typography>
      <Skeleton variant="rectangular" animation='wave' className='w-full' height={175}/>
      
    </Paper>
  )
}

const CropCat = () => {
  const category = [
    'Food',
    'Cash',
    'Fiber',
    'OilSeed',
  ]
  return (
    <Card
      className='w-full p-3 flex-col gap-2'
      sx={{
        display: 'flex',
      }}
    >
      <Typography variant='h5' gutterBottom>Crop Categories</Typography>
      <Box className='w-full flex justify-between'>
        {category.map((cat)=>(
          <Box key={cat} className='w-[15%] center-col'>
            <Box className='w-full aspect-square'>
              <Avatar
                src='/ListingPlaceholder.png'
                sx={{
                  border: 1,
                  borderColor: 'divider',
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  aspectRatio: '1/1',
                }}
              />
            </Box>
            <Typography variant='body1' align='center' >{cat}</Typography>
          </Box>
        ))}
      </Box>
    </Card>
  )
}


const page = () => {
  return (
    <>
      <AppbarWMenu
        title="HarvestHive"
        primaryOption='drawer'
        endIcon={<SearchRoundedIcon />}
        endHref="/v/search"
      />
      <Box className="w-screen p-4 center-col gap-3">
        <CropCat />
        <Suspense fallback={<LastBidsSkeleton />}>
          <LastBids/>
        </Suspense>
        <Suspense fallback={<ListsSkeleton/>}>
        <PurchaseHistory />
        </Suspense>
        {/* <ListingCard listingData={demoData} variant={'vendor'}/> */}
      </Box>
    </>
  )
}

export default page
