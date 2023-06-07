import { blue } from '@mui/material/colors';
import createTheme from '@mui/material/styles/createTheme';
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    login: true;
  }
}
export const COLORS = {
  boldBlue: '#444B77',
  mainBlue: '#6793FD',
  secBlue: '#242846',
  navBlue: '#3D446F',
  navDarkBlue: '#242846',
  grey: '#D7D7D7',
  darkGrey: '#808080',
  lightGrey: '#F3F3F3',
  yellow: '#E7D000',
  white: '#E2E2E2',
  red: '#FF0000',
  darkRed: '#d32f2f',
  green: '#8AC014',
  orange: '#FFA500',
  statusBlue: '#4379FD',
  statusDarkBlue: '#00034D',
  statusGrey: '#A6A6A6',
  statusTurquoise: '#019CA5',
  statusOrange: '#E95805',
  statusGreen: '#0FA60F',
  tableGrey: '#DFDFDF',
  loginMain: '#224957',
};
export const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          '&:first-letter': { textTransform: 'capitalize' },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'login' },
          style: {
            textTransform: 'none',
            background: '#6793FD',
            color: 'white',
            fontSize: '16px',
            borderRadius: '8px',
            boxShadow: '0px 10px 10px 5px rgba(0,0,0,0.15)',

            '&:hover': { background: '#8badfc' },
          },
        },
      ],
    },
  },
  typography: {
    fontFamily: 'Inter',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      color: 'red',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h6: {
      fontWeight: 400,
      fontSize: '1.2rem',
    },
  },
});
