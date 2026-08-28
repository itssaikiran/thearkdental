import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: { main: '#07545b', dark: '#063c42', light: '#1a737b' },
    secondary: { main: '#c59a4a', dark: '#9a722d', light: '#e1c27a' },
    background: { default: '#fbfaf7', paper: '#ffffff' },
    text: { primary: '#153238', secondary: '#5d7074' },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", Arial, sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.04em' },
    h2: { fontWeight: 800, letterSpacing: '-0.03em' },
    h3: { fontWeight: 750, letterSpacing: '-0.02em' },
    button: { fontWeight: 750, textTransform: 'none' },
  },
  shape: { borderRadius: 18 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 999, paddingInline: 22, minHeight: 46 } },
    },
    MuiCard: { styleOverrides: { root: { borderRadius: 24 } } },
  },
})
