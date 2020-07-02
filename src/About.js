/* eslint-disable max-len */
import React from 'react';
import Sofia from './IMG_0399.JPG';

const About = () => (
  <>
    <h3>About&nbsp;Me</h3>
    <div className="about-content">
      <div className="about-text">
        <p>Hi! I&apos;m Sofia, I&apos;m a web developer living in Oakland, CA.</p>
        <p>
          I love creating things but I&apos;m particularly passionate about building accessible, responsive UIs.
        </p>
        <p>
          I&apos;m originally from Portugal but I moved to the Bay Area in 2013. Since then I have worked at
          {' '}
          <a href="https://www.zendesk.com" target="_blank" rel="noopener noreferrer" aria-label="Zendesk">Zendesk</a>
          ,
          {' '}
          <a href="https://www.postmates.com" target="_blank" rel="noopener noreferrer" aria-label="Postmates">Postmates</a>
          {' '}
          and
          {' '}
          <a href="https://www.onemedical.com" target="_blank" rel="noopener noreferrer" aria-label="One Medical">One Medical</a>
          .
        </p>
        <p>When I&apos;m not coding, I still mostly try to build and make things. My current favorites are knitting and baking, but I&apos;m always open to new projects... if you send me an idea and some tools I will make something awesome!</p>
      </div>
      <div className="about-image">
        <img src={Sofia} alt="Sofia Levin" />
      </div>
    </div>
  </>
);

export default About;
