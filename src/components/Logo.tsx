import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

const Logo = () => {
  return (
    <Box className="flex flex-col gap-4 justify-center items-center">
      <Image priority src="/logo.svg" alt="logo" width={64} height={64} />
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
  )
}

export default Logo
