import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { Box, ThemeProvider } from '@mui/material'
import theme from '@/src/theme/theme'
import { CssBaseline } from '@mui/material'
import '/styles/globals.css'



export default function RootLayout(props: any) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <body>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {props.children}
          </ThemeProvider>
        </body>
      </AppRouterCacheProvider>
    </html>
  )
}
