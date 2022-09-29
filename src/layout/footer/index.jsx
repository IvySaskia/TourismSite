import React from "react";

const Footer = ({ footerProps }) => {
  const { titleSite, description, socialMedia } = footerProps;
  return (
    <>
      <p>FOOTER - { titleSite }</p>
      <p>{ description }</p>
      <p>{ socialMedia }</p>
    </>
  );
};

export default Footer;
