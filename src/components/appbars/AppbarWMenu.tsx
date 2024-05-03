'use client'
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'

const AppbarWMenu = ({
  title,
  endIcon,
  startIcon,
  startHref,
  endHref,
  noElevation,
  primaryOption='drawer',
}: {
  title: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  startHref?: string
  endHref?: string
  noElevation?: boolean
  primaryOption?: 'drawer' | 'back' | 'home'
}) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  let url=usePathname();
  const role=url[1];
  const router = useRouter();
  const vendorDrawerOptions=[
    {
      text: 'Dashboard',
      href: `/v/dash/`,
    },
    {
      text: 'My Bids',
      href: `/v/profile/bids/`,
    },
    {
      text: 'Orders',
      href: `/v/profile/orders/`,
    },
    {
      text: 'Settings',
      href: `/account/settings/`,
    },
    {
      text: 'Logout',
      href: `/logout/`,
    },
  ]
  const farmerDrawerOptions=[
    {
      text: 'Dashboard',
      href: `/f/dash/`,
    },
    {
      text: 'Add Listing',
      href: `/f/listings/add/`,
    },
    {
      text: 'Listings',
      href: `/f/listings/view/`,
    },
    {
      text: 'Sold',
      href: `/f/profile/`,
    },
    {
      text: 'Settings',
      href: `/account/settings/`,
    },
    {
      text: 'Logout',
      href: `/logout/`,
    },
  ]

  const DrawerList = (
    <Box sx={{ minWidth: 250 }} className='h-[75%] p-4 flex flex-col items-start justify-center' role="presentation" onClick={toggleDrawer(false)}>
      <Box className="flex flex-col gap-4 justify-center items-start">
        <Image priority src="/Logo.svg" alt="logo" width={64} height={64} />
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            marginTop: '16px',
          }}
        >
          Harverst Hive
        </Typography>
      </Box>
      <List className='w-full'>
        {(role=='f'?farmerDrawerOptions:vendorDrawerOptions).map((item, index) => (
          <Box key={index} className='w-full'>
          <ListItem key={index} className='w-full' disablePadding>
            <Link href={item.href}>
              <ListItemButton 
                sx={{
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
          <Divider className='w-full'/></Box>
        ))}
      </List>
    </Box>
  );

  // const theme = useTheme();
  return (
    <AppBar position="sticky" elevation={noElevation?0:undefined} >
      <Toolbar>
      {primaryOption=='drawer' && <IconButton
        onClick={toggleDrawer(true)}
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuRoundedIcon />
      </IconButton>}
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>

        {primaryOption=='back' && <IconButton
          onClick={()=>{router.back()}}
          size="large"
          edge="start"
          color="inherit"
          sx={{ mr: 2 }}
        >
          <ArrowBackIcon />
        </IconButton>}

        {primaryOption=='home' && <IconButton
          onClick={()=>{router.push(`/${role}/dash/`)}}
          size="large"
          edge="start"
          color="inherit"
          sx={{ mr: 2 }}
        >
          <ArrowBackIcon />
        </IconButton>}

        {startIcon && <IconButton
          href={startHref ? startHref : '#'}
          size="large"
          edge="start"
          color="inherit"
          sx={{ mr: 2 }}
        >
          {startIcon}
        </IconButton>}
        <Typography variant="h6" className="flex-grow">
          {title}
        </Typography>
        {endIcon && <IconButton
          href={endHref ? endHref : '#'}
          size="large"
          edge="start"
          color="inherit"
        >
          {endIcon}
        </IconButton>}
      </Toolbar>
    </AppBar>
  )
}

export default AppbarWMenu
