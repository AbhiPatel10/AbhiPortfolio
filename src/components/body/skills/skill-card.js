import React, {useEffect} from "react";
import "./skill-card.css";
import AOS from "aos";
import "aos/dist/aos.css";

function SkillCard({ skill }) {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
    AOS.refresh();
  }, []);
  return (
    <div data-aos={skill.aos} data-aos-offset="200" className="skill-card">
      <div className="skill-icon">{skill.icon}</div>
      <label className="skill-name">{skill.name}</label>
    </div>
  );
}

export default SkillCard;
