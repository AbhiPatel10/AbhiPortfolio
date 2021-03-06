import React from "react";
import { SocialData } from "../../../data/social";
import "./social-contact.css";
function SocialContact(props) {
  const data = SocialData;
  return (
    <div className={props.class} >
      {data.map((item) => {
        return (
          <a href={item.link} target="_blank" rel="noreferrer">
            <div className="social-icon-div">
              <img src={item.icon} style={{animation: item.style}} className="social-icon" alt="Social-icon"/>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default SocialContact;
