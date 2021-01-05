import React from 'react';

import { IoFootball } from 'react-icons/io5';

// eslint-disable-next-line arrow-body-style
const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="footer__logo">
        <IoFootball />
        <h4>
          SportsLive
        </h4>
      </div>

      <div className="header header--non-nav">
        <div className="header__items-container">
          &#169; Copyright SportLive 2020, All rights reserved.
        </div>

        <div className="header__items-container">
          <div>
            Career
          </div>
          <div>
            Contact Us
          </div>
          <div>
            Privacy Policy
          </div>
          <div>
            Terms and Conditions
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
