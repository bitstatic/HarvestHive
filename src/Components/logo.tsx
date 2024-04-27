import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Image from "next/image";

const logo = () => {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '6vh',
       }}>
        <Image priority src="/logo.svg" alt="logo" width={64} height={64}/>
        <Typography variant="h4" gutterBottom  sx = {{
          marginTop : '16px',
        }}>    
          Harverst Hive
        </Typography>
      </Box>
  )
}

export default logo