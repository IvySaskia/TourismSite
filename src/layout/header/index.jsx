import React from "react";
import MyMenu from "../../components/my-menu";
import SocialMedia from "../../components/social-media";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Flag from 'react-flagkit';

const Header = () => {  
  return (<>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MyMenu />
          <Box sx={{ display: 'flex', alignItems: 'center', px: 5, pb: 1 }}>
            <Flag country="BO" />
          </Box>
          <SocialMedia />
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
};

export default Header;
