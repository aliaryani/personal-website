import { useEffect, useState } from 'react';
import ToggleTheme from '../ToggleTheme';
import { Stack } from '@mui/material';

const NavbarLinks = ({ desktop ,handleClick}) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
        sx={{ display:{sm:"block",xs:'none'}}}
      >
        <a className='NavbarLinks' onClick={()=>handleClick("skills")}>About</a>
        <a className='NavbarLinks'  onClick={()=>handleClick("projects")}>Projects</a>
        <a className='NavbarLinks'  onClick={()=>handleClick("contact")}>Contact</a>
        {hasMounted && <ToggleTheme />}
      </Stack>
   
  );
};

export default NavbarLinks;
