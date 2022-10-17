import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Box, Button } from '@mui/material';

const Header = ({executeScroll,handleClick}) => {
  const [sidebar, toggle] = useState(false);
  const [open, setOpen] = React.useState(false);
 

  const toggleDrawer = (newOpen) => () => {

    setOpen(newOpen);
  };


  return (
    <div style={{paddingTop:32}}>
      <Navbar toggleDrawer={toggleDrawer} handleClick={handleClick}/>
     
      <Sidebar open={open} toggleDrawer={toggleDrawer} handleClick={handleClick}/>
    </div>
  );
};

export default Header;
