import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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