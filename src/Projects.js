import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import CoronaGif from './gifs/coronasweeper.gif';
import AlpacaGif from './gifs/alpaca-vids.gif';
import KnitHub from './gifs/knithub.gif';

const Projects = () => {
  const projects = [
    {
      id: 4,
      name: 'Coronasweeper',
      in_progress: false,
      internal: false,
      description: ["Coronasweeper is a coronavirus themed minesweeeper game I designed and built as a different kind of challenge. It uses react and styled-components for styling and it's fully responsive."],
      tech: ['react', 'styled-components'],
      img: CoronaGif,
      site: 'https://www.coronasweeper.com',
      
    },
    {
      id: 3,
      name: 'VideoBooth.io',
      in_progress: false,
      internal: false,
      description: ['Previously Alpaca Vids. Collaborated with a team of 6 over the course of 2 months to plan and build a React and Node.js video recording app; app uses the MediaDevices web API.', 'The application allows students to record themselves answering interview questions in order to get practice before they start interviewing for jobs.'],
      tech: ['react', 'redux', 'nodejs', 'express', 'postgresql', 'awsS3'],
      img: AlpacaGif,
      github: 'https://github.com/VideoBooth-io/videobooth-fe',
      site: 'https://www.videobooth.io',
    },
    {
      id: 2,
      name: 'KnitHub',
      in_progress: true,
      internal: false,
      description: ['Web app to find knitting tutorials for various techniques, with options to filter by source, type of tutorial (video or picture), type of technique, and more.'],
      tech: ['react', 'redux', 'nodejs', 'express', 'postgresql'],
      img: KnitHub,
    },
    {
      id: 1,
      name: 'Stripe Refund App for Zendesk',
      in_progress: false,
      internal: true,
      description: ['Zendesk sidebar app to allow the One Medical support team to issue membership refunds without leaving the support ticket.', 'Built during the One Medical hack week as an initiative to improve the workflow of the support team.'],
      tech: ['react', 'bootstrap', 'stripeAPI'],
      img: 'https://p198.p4.n0.cdn.getcloudapp.com/items/geuWBW4g/ezgif.com-video-to-gif%20(1).gif?v=01c63115e04adca1cf6cc88b55d3045c',
    },
  ];

  return (
    <>
      <h3>
        Projects
      </h3>
      {
        projects.map((project) => (
          <div className="project-container" key={project.id}>
            <h4>{project.name}</h4>
            <div className="project-description">
              {
            project.description.map((line, index) => <p key={`${project.id}_line_${index + 1}`}>{line}</p>)
              }
              <div className="tech-stack">
                {
          project.tech.map((item) => (
            <span key={`${project.id}_${item}`}>
              #
              {item}
            </span>
          ))
                }
              </div>
              <div className="project-links">
                {
            project.github ? (
              <a href={project.github} aria-label={`${project.name} Github`}>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            ) : null
                }
                {
            project.site ? (
              <a href={project.site} aria-label={`${project.name} Site`}>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            ) : null
                }
              </div>
            </div>
            <div className="project-image">
              <img alt={`${project.name}`} src={project.img} />
            </div>
          </div>
        ))
      }
    </>
  );
};

export default Projects;
