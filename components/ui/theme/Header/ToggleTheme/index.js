import React , { createContext, useContext } from 'react';

import { useTheme } from "@mui/material/styles";
import Sun from '../../../Icons/Sun';
import Moon from '../../../Icons/Moon';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeContext } from '../../../../theme-context';

const ColorModeContext = createContext();
const ToggleTheme = () => {
  
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        <IconButton sx={{ ml: 1 }} onClick={toggleTheme} style={{color:"#121212"}}>
        {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      )}
    </ThemeContext.Consumer>
  );
};

export default ToggleTheme;
