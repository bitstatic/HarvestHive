import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material';
import theme from "../theme";
import { CssBaseline } from "@mui/material";
import "./globals.css";

export default function RootLayout(props:any) {
  return (
    <html lang="en">
     <body>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          {/* <CssBaseline /> */}
          {props.children}
        </ThemeProvider>
      </AppRouterCacheProvider>
     
     </body>
    </html>
  );
}
