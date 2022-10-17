import { Box, Button, IconButton, Stack } from '@mui/material';
import Link from 'next/link';
import NavbarLinks from '../NavbarLinks';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleTheme from '../ToggleTheme';

const Navbar = ({toggleDrawer,executeScroll,handleClick}) => (
    <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    spacing={2}
  >
    
      <a style={{fontWeight:'bold',cursor:'pointer'}} onClick={()=>handleClick("contact")}>Ali Aryani</a>
    <NavbarLinks desktop handleClick={handleClick}/>
    <Box sx={{ mr: 2,display:{sm:"none",xs:'block'}}}><ToggleTheme /></Box>
      <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            edge="start"
            sx={{ mr: 2,display:{sm:"none",xs:'block'}}}

          >
            <MenuIcon style={{color:"#212121"}}/>
           
          </IconButton>
         
</Stack>
);

export default Navbar;
