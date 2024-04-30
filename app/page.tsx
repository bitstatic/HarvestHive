import { Box, Typography, useTheme } from '@mui/material'
import Container from '@mui/material/Container'
import Image from 'next/image'

export default async function Home() {
  return (
    <Container maxWidth="sm">
      <Box className="h-screen flex flex-col justify-center gap-4 items-center">
        <Image priority src="/logo.svg" alt="logo" width={155} height={155} />
        <Typography variant="h3">Harverst Hive</Typography>
      </Box>
    </Container>
  )
}
