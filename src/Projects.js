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
      in_progress: false,
      internal: false,
      description: ["Collaborated with a team of 6 over the course of 2 months to plan and build a React and Node.js video recording app; app uses the MediaDevices web API.", "The application allows students to record themselves answering interview questions in order to get practice before they start interviewing for jobs."],
      tech: ["react", "redux", "nodejs", "express", "postgresql", "awsS3"],
      img: AlpacaGif,
      github: "https://github.com/Lambda-School-Labs/video-journal-for-teams-fe",
      site: "https://www.alpacavids.com"

    },
    {
      name: "KnitHub",
      in_progress: true,
      internal: false,
      description: ["Web app to find knitting tutorials for various techniques, with options to filter by source, type of tutorial (video or picture), type of technique, and more."],
      tech: ["react", "redux", "nodejs", "express", 
      "postgresql"],
      img: "https://p198.p4.n0.cdn.getcloudapp.com/items/Z4uLp5l4/Screen%20Recording%202020-05-12%20at%2008.01%20PM.gif?v=9df0f357e6a721b4fa1e252c3eda02de"
    },
    {
      name: "Stripe Refund App for Zendesk",
      in_progress: false,
      internal: true,
      description: ["Zendesk sidebar app to allow the One Medical support team to issue membership refunds without leaving the support ticket.", "Built during the One Medical hack week as an initiative to improve the workflow of the support team."],
      tech: ["react", "bootstrap", "stripeAPI"],
      img: "https://p198.p4.n0.cdn.getcloudapp.com/items/geuWBW4g/ezgif.com-video-to-gif%20(1).gif?v=01c63115e04adca1cf6cc88b55d3045c"
    },
  ]



  return (
    <>
    <h3>
      Projects
    </h3>
      {
        projects.map(project => <div className="project-container">
        <h4>{project.name}</h4>
        <div className="project-description">
          {
            project.description.map(line => <p>{line}</p>)
          }
          <div className="tech-stack">
        {
          project.tech.map(item => <span>#{item}</span>)
        }
        </div>
        </div>
        <div className="project-image">
          <img src={project.img} />
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
        </div>)
      }
    </>
  );
}
 
export default Projects;