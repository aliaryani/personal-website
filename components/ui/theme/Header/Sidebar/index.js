import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Link, Stack } from '@mui/material';

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

function Sidebar(props) {
  const { window } = props;

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;


  const HandleClickMenu=(key)=>{
    props.toggleDrawer(false)
    props.handleClick(key)
  }

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            width:"75%",
            overflow: 'visible',
          },
        }}
      />
      
      
      <SwipeableDrawer
        container={container}
        anchor="left"
        open={props.open}
        onClose={props.toggleDrawer(false)}
        onOpen={props.toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
       <Stack spacing={2}  justifyContent="space-between"
  alignItems="center"
  style={{marginTop:32}}
  >

<a style={{fontWeight:'bold',color:"#121212",cursor:'pointer'}} onClick={()=>HandleClickMenu("skills")}>About</a>
        <a style={{fontWeight:'bold',color:"#121212",cursor:'pointer'}}  onClick={()=>HandleClickMenu("projects")}>Projects</a>
        <a style={{fontWeight:'bold',color:"#121212",cursor:'pointer'}}  onClick={()=>HandleClickMenu("contact")}>Contact</a>
      </Stack>
      </SwipeableDrawer>
    </Root>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Sidebar;
