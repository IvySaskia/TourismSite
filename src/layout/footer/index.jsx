import React from "react";

import SocialMedia from "../../components/social-media";

const Footer = ({ footerProps }) => {
  const { titleSite, description } = footerProps;
  return (
    <>
      <p>FOOTER - { titleSite }</p>
      <p>{ description }</p>
      <SocialMedia />
    </>
  );
};

export default Footer;
