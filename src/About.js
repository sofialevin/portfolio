import React from 'react';
import Sofia from './IMG_0399.JPG';

const About = () => {
  return (
    <>
        <img src={Sofia} alt="Sofia's Profile Picture" />
        <div className="about-content">
          <h2>Hi, I'm Sofia and I'm a<br />Full Stack Web Developer</h2>
          <h2>living in Oakland, CA</h2>
        </div>
    </>
  );
}
 
export default About;