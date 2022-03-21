import { createTheme } from '@mui/material'
import { green, red } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFD369',
      contrastText: 'white',
      light: '#FFD365',
      dark: '#FFD367',
    },
    secondary: {
      main: 'rgb(0,0,0)',
    },
    error: red,
    warning: { main: '#0066FF' },
    info: { main: '#0066FF' },
    success: green,
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
})

export default theme
