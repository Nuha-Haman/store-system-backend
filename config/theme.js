import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Tajawal, sans-serif',
    fontSize:15,
  },

  palette: {
    primary: {
      main: '#363F59',
    },
    secondary: {
      main: '#f53838',
    },
    error: {
      main: red.A400,
    },
    darkGreen: {
      main:'#0C5400'
    }
  },
});

export default theme;



  
  

