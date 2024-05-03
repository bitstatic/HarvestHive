import AppbarWMenu from '@/src/components/appbars/AppbarWMenu'
import ArchivedList from '@/src/components/lists/ArchivedList'
import CurrentlyListed from '@/src/components/lists/CurrentlyListed'
import ListsSkeleton from '@/src/components/skeletons/ListsSkeleton'
import { Box, Card } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import React, { Suspense } from 'react'


const page = () => {
  return (
    <>
      <AppbarWMenu
        title="Dashboard"
        primaryOption="drawer"
        endHref='/account/settings/'
        endIcon={<SettingsIcon />}
        />
      <Box className='w-screen p-4 flex flex-col items-center justify-start gap-4'>
        <Suspense fallback={<ListsSkeleton />}>
          <CurrentlyListed />
        </Suspense>
        <ArchivedList />
      </Box>
    </>
  )
}

export default page
