import React, { createContext, useMemo, useState } from 'react';

import '../styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeContext } from '../components/theme-context';
import { amber, deepOrange, grey } from '@mui/material/colors';


function MyApp({ Component, pageProps }) {

  const [mode, setMode] = useState('light');
  
  const getDesignTokens = () => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {

            divider: amber[200],
            text: {
              primary: grey[900],
              secondary: grey[200],
            },
          }
        : {
            primary: deepOrange,
            divider: deepOrange[700],
            text: {
              primary: '#fff',
              secondary: "#fff",
            },
          }),
    },
  });

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const ToggleButtton=()=>{[
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  ]}

  return( 
  <>
   <ThemeContext.Provider value={{theme:mode,toggleTheme:ToggleButtton}}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
  <Component {...pageProps} />
  </ThemeProvider>
    </ThemeContext.Provider>  </>)
 
}

export default MyApp
