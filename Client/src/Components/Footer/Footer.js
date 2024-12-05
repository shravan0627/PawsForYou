import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div>
        <Link className="logo-container" to="/">
          <img className="navbar-logo" src={logo} alt="PawsForU Logo" />
          <p>{props.title}</p>
        </Link>
      </div>
      <div className="below-footer">
        <p>
          You can reach us at{" "}
          <a className="mail-links" href="mailto:PawsForU@gmail.com">
            pawsforu@gmail.com
          </a>
        </p>
        <p>&copy; 2024 PAWS for U</p>
      </div>
    </footer>
  );
};

export default Footer;
