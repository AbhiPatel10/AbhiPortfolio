import React,{ useEffect, useRef} from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";
import { Typewriter } from "react-simple-typewriter";
import Lottie from 'lottie-web';
function About() {
  const container = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      // eslint-disable-next-line global-require
      animationData: require('../../Lottie/lottie.json'),
    });
  }, []);
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br />
          <span className="info-name">Abhi Patel</span>.<br />
          I'm
          <Typewriter
            words={[  
              " Font-End Devloper",
              " MERN Stack Devloper",
              " Python Developer",
              " Google ads Expert",
              " Freelancer"
            ]}
            loop
            cursor
            cursorStyle="</>"
            typeSpeed={70}
          />
        </div>
        <div className="about-photo">
          
          <div className="picture" ref={container} />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
