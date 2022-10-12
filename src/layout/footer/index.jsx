import React from "react";

import SocialMedia from "../../components/social-media";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = ({ footerProps }) => {
  const { titleSite, description } = footerProps;

  return (
    <>
      <Box
        width="100%"
        height="20%"
        p={1}
        position="fixed"
        bottom="0"
        bgcolor='primary.dark'
        color='white'
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ flexDirection:'column' }}
      >       
        <Typography
          component="a"
          href="/"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 200,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          { titleSite }
        </Typography>
        <p>{ description } <FavoriteIcon sx={{ pt: 1 }}/></p>
        <SocialMedia />
      </Box>
    </>
  );
};

export default Footer;
