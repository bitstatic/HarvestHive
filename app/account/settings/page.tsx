import AppbarWMenu from '@/src/components/appbars/AppbarWMenu'
import { Avatar, Box, Divider, Paper, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import LockIcon from '@mui/icons-material/Lock';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HelpIcon from '@mui/icons-material/Help';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Link from 'next/link'
import React from 'react'
const page = () => {
  
  const userData ={
    userID: '123456',
    accType: 'f',
    name: 'John Doe',
    email: 'johndoe@foofoo.com',
    phone: '1234567890',
  }

  return (
    <>
      <Box bgcolor={'primary.main'} className='w-screen h-full flex flex-col items-center' >
        <AppbarWMenu
          noElevation
          title='Settings'
          primaryOption='home'
        />
        <Box className='center-col gap-2' >
          <Avatar
            sx={{ 
              width: 100,
              height: 100,
              border: 1,
              borderColor: 'divider',
              backgroundColor: 'background.default'
              // margin: 'auto',
              // marginTop: 10 
            }}
            src={userData.accType=='f'?'/farmerAvatarPlaceHolder.png':'/vendorAvatarPlaceHolder.png'}
          />
          <Typography variant='h5' color={'Background'} gutterBottom>{userData.name}</Typography>
        </Box>
        <Box bgcolor={'background.default'} className='w-screen grow rounded-t-[1rem] flex flex-col gap-4 justify-start items-center p-4 gap-4'>
          <Link href='/account/settings/edit' className='w-full '>
            <Paper
              elevation={0}
              className='py-3 px-2 flex-col gap-1.5'
              sx={{
                display: 'flex',
                border: 1,
                borderColor: 'divider',
              }}
            >
              <Box className='w-full flex justify-end'>
                <EditIcon fontSize='large' sx={{color: 'text.secondary'}}/>
              </Box>
              <Box className='flex px-1 justify-between items-center'>
                <Typography variant='subtitle1' color={'text.primary'} >Account Type</Typography>
                <Typography variant='subtitle1' color={'text.secondary'}>{userData.accType=='f'?'Farmer':'Vendor'}</Typography>
              </Box>
              <Divider />
              <Box className='flex px-1 justify-between items-center'>
                <Typography variant='subtitle1' color={'text.primary'} >Email</Typography>
                <Typography variant='subtitle1' color={'text.secondary'}>{userData.email}</Typography>
              </Box>
              <Divider />
              <Box className='flex px-1 justify-between items-center'>
                <Typography variant='subtitle1' color={'text.primary'} >Phone</Typography>
                <Typography variant='subtitle1' color={'text.secondary'}>{userData.phone}</Typography>
              </Box>
            </Paper>
          </Link>

          <Paper
            elevation={0}

            className='w-full p-3 flex-col gap-4'
            sx={{
              display: 'flex',
              border: 1,
              borderColor: 'divider',
            }}
          >
            <Link href={'#'} className='flex gap-4'>
              <StorefrontIcon sx={{color: 'text.secondary'}}/>
              <Typography variant='subtitle1' color={'text.primary'}>Products</Typography>
            </Link>
            <Divider />
            <Link href={'#'} className='flex gap-4'>
              <LockIcon sx={{color: 'text.secondary'}}/>
              <Typography variant='subtitle1' color={'text.primary'}>Change Password</Typography>
            </Link>
          </Paper>

          <Paper
            elevation={0}

            className='w-full p-3 flex-col gap-4'
            sx={{
              display: 'flex',
              border: 1,
              borderColor: 'divider',
            }}
          >
            <Link href={'#'} className='flex gap-4'>
              <HelpIcon sx={{color: 'success.dark'}}/>
              <Typography variant='subtitle1' color={'success.dark'}>Support</Typography>
            </Link>
            <Divider />
            <Link href={'/logout'} className='flex gap-4'>
              <ExitToAppIcon sx={{color: 'error.main'}}/>
              <Typography variant='subtitle1' color={'error.main'}>Logout</Typography>
            </Link>
          </Paper>
        </Box>
      </Box>
    </>
  )
}

export default page