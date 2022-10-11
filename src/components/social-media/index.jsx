import React from "react";

import Box from '@mui/material/Box';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialMedia = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
      <FacebookIcon sx={{ mr: 1 }} />
      <TwitterIcon sx={{ mr: 1 }} />
      <InstagramIcon sx={{ mr: 1 }} />
    </Box>
  );
};

export default SocialMedia;
