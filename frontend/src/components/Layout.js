import React from "react";

import Banner from "../components/Banner";

import Navbarjc from "../components/Navbarjc";

import SocialMediaContact from "../components/SocialMediaContact";

function layout(props) {
  return (
    <React.Fragment>
      <Banner />
      <Navbarjc />
      {props.children}
      <SocialMediaContact />
    </React.Fragment>
  );
}

export default layout;
