import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material';
import theme from "../theme";
import { CssBaseline } from "@mui/material";

export default function RootLayout(props:any) {
  return (
    <html lang="en">
     <body>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {props.children}
        </ThemeProvider>
      </AppRouterCacheProvider>
     
     </body>
    </html>
  );
}
