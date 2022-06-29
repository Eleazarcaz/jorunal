import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#764AF1',
    },
    secondary: {
      main: '#9772FB',
    },
    text: {
      main: '#111927',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
