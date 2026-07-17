import React from 'react';
import '../assets/styles/Contact.scss';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Button
            component="a"
            href="mailto:elliot@mjiho.com"
            variant="contained"
            endIcon={<SendIcon />}
          >
            Email Me
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
