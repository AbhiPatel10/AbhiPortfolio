import React from "react";
import "./skills.css";
import { SkillsData } from "../../../data/skills";
import SkillCard from "./skill-card";
import Separator from "../../common/separator";

function Skills() {
  const data = SkillsData;
  return (
    <div className="skills">
      <Separator />
      <label className="section-title">&lt; Skills &gt;</label>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div className="skills-section">
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill) => {
                  return <SkillCard skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <label className="section-title">&lt; Skills /&gt;</label>
    </div>
  );
}

export default Skills;
