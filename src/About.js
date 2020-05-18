import React from 'react';
import Sofia from './IMG_0399.JPG';

const About = () => {
  return (
    <>
      <h3>About&nbsp;Me</h3>
        <div className="about-content">
          <div className="about-text">
            <p>Hi! I'm Sofia, I'm a web developer living in Oakland, CA.</p>
            <p>I love creating things but I'm particularly passionate about building accessible, responsive UIs.</p>
            <p>I'm originally from Portugal but I moved to the Bay Area in 2013. Since then I have worked at <a href="https://www.zendesk.com" target="_blank">Zendesk</a>, <a href="https://www.postmates.com" target="_blank">Postmates</a> and <a href="https://www.onemedical.com" target="_blank">One Medical</a>.</p>
            <p>When I'm not coding, I still mostly try to build and make things. My current favorites are knitting and baking, but I'm always open to new projects... if you send me an idea and some tools I will make something awesome!</p>
          </div>
          <div className="about-image">
            <img src={Sofia} alt="Sofia's Profile Picture" />
          </div>
        </div>
    </>
  );
}
 
export default About;