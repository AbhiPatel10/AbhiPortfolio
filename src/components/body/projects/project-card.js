import React, {useEffect} from "react";
import "./project-card.css";
import AOS from "aos";
import "aos/dist/aos.css";

function ProjectCard({ project }) {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
    AOS.refresh();
  }, []);
  return (
    <div data-aos={project.aos} data-aos-offset="200" className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" rel="noreferrer" href={project.demo} target="_blank">
              <div className="link-button">
                <i class="fi-rr-globe"></i>
                Demo
              </div>
            </a>
          )}
          {project.github && (
            <a className="project-link" href={project.github}>
              <div className="link-button">
                <i class="devicon-github-original colored"></i> GIthub
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <img src={project.image} className="project-photo" alt="project_image"/>
    </div>
  );
}

export default ProjectCard;
