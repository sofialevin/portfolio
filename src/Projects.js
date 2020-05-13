import React from 'react';

import AlpacaGif from './alpaca-vids.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt
 } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
  const projects = [
    {
      name: "Alpaca Vids",
      description: ["Collaborated in a team of 6 over the course of 2 months to plan and build a React and Node.js video recording app using the MediaDevices web API.", "The application allows students to record themselves answering interview questions in order to get practice before they start interviewing for jobs."],
      tech: ["react", "redux", "nodejs"],
      img: AlpacaGif,
      github: "https://github.com/Lambda-School-Labs/video-journal-for-teams-fe",
      site: "https://www.alpacavids.com"

    },
    {
      name: "KnitHub",
      description: ["Web app to find knitting tutorials for various techniques, with options to filter by source, type of tutorial (video or picture), type of technique, and more."],
      tech: ["react", "redux"],
      img: "https://p198.p4.n0.cdn.getcloudapp.com/items/Z4uLp5l4/Screen%20Recording%202020-05-12%20at%2008.01%20PM.gif?v=9df0f357e6a721b4fa1e252c3eda02de"
    },
  ]



  return (
    <>
    <h3>
      Projects
    </h3>
      {
        projects.map(project => <div className="project-container">
        <div className="project-content">
          <h4>{project.name}</h4>
          {
            project.description.map(line => <p>{line}</p>)
          }
          <div className="tech-stack">
        {
          project.tech.map(item => <span>#{item}</span>)
        }
        </div>
        <div className="project-links">
          {
            project.github ? <a href={project.github}>
          <FontAwesomeIcon icon={faGithub} />
        </a> : null
          }
          {
            project.site ? <a href={project.site}>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a> : null
          }
          </div>
        </div>
        <img src={project.img} />
        </div>)
      }
    </>
  );
}
 
export default Projects;