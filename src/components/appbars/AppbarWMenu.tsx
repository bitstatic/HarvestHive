import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material'

const AppbarWMenu = ({
  title,
  endIcon,
  startIcon,
  startHref,
  endHref,
}: {
  title: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  startHref?: string
  endHref?: string
}) => {
  // const theme = useTheme();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          href={startHref ? startHref : '#'}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          {startIcon}
        </IconButton>
        <Typography variant="h6" className="flex-grow">
          {title}
        </Typography>
        <IconButton
          href={endHref ? endHref : '#'}
          size="large"
          edge="start"
          color="inherit"
          aria-label="search"
        >
          {endIcon}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default AppbarWMenu
