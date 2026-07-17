import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/elliot-min" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.instagram.com/ejm_ak" target="_blank" rel="noreferrer"><InstagramIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/elliot-min" target="_blank" rel="noreferrer">Elliot Min</a> with 💜</p>
    </footer>
  );
}

export default Footer;