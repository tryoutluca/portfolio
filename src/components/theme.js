import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0A0C0F',
      paper: '#12151B',
    },
    text: {
      primary: '#F2F4F7',
      secondary: '#8A93A1',
    },
  },
  typography: {
    fontFamily: '"Space Grotesk", "Centra", sans-serif',
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '0px',
          '@media (min-width: 600px)': {
            padding: '20px'
          }
        },
      },
    },
  },
});

export default theme;