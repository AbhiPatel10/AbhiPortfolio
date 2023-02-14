import React from "react";
import "./projects.css";
import ProjectCard from "./project-card";
import { ProjectData } from "../../../data/projects";
import Separator from "../../common/separator/index";
// import AOS from "aos";
import "aos/dist/aos.css";


function Projects() {
  
  
  const data = ProjectData;
  return (
    <div className="projects classessss">
      <Separator />
      <label className="section-title text-3xl mt-5">Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
