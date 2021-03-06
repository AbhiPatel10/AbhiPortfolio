import React from "react";
import "./contact.css";
import SocialContact from "../../common/social-contact/index";
import Separator from "../../common/separator/index";
function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContact  class="footer-social-contact"/>
        </div>
        <div className="download">
          <a download href={require("../../../assets/AbhiPatel.pdf").default}>
            <i class="fi-rr-cloud-download download-icon" /> &nbsp;
             Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
