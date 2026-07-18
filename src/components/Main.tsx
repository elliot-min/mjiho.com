import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://i.pinimg.com/originals/9d/9c/58/9d9c58d4965a43565ba6d55a5ee0d606.jpg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/elliot-min" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.instagram.com/ejm_ak" target="_blank" rel="noreferrer"><InstagramIcon/></a>
          </div>
          <h1>Elliot Min 🇰🇷🇺🇸</h1>
          <p>A student exploring finance, technology, and AI through practical projects.
</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/elliot-min" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.instagram.com/ejm_ak" target="_blank" rel="noreferrer"><InstagramIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;