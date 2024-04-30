import { Box, Typography } from "@mui/material";
import Container from '@mui/material/Container';
import Image from "next/image";

export default async function Home() {
  return (
    <Container maxWidth="sm">
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30vh',
        marginBottom: '20vh',
      }}>
        <Image priority src="/logo.svg" alt="logo" width={155} height={155} />
        <Typography variant="h3"  sx={{
          marginTop: '2rem',
        }}>
          Harverst Hive
  	    </Typography>
      </Box>
    </Container>
  );
} 
