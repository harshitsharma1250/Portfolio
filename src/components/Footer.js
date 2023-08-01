import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to="https://rb.gy/xow62"><LinkedInIcon /></Link>
        <Link to="https://t.ly/ieMu3"><TwitterIcon /></Link>
        <Link to="https://t.ly/VjNHp"><InstagramIcon /></Link>
      </div>
      <p> &copy; 2023 </p>
    </div>
  );
}

export default Footer;