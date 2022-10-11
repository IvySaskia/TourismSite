import React from "react";
import MyMenu from "../../components/my-menu";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import Flag from 'react-flagkit';

const Header = () => {  
  return (<>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MyMenu />
          <Flag country="BO" />
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
};

export default Header;
