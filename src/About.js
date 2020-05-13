import React from 'react';
import Sofia from './IMG_0399.JPG';

const About = () => {
  return (
    <>
        <img src={Sofia} alt="Sofia's Profile Picture" />
        <div className="about-content css-typing">
          <h2>Hi, I'm Sofia</h2>
          <h2>I'm a Full Stack Web Developer</h2>
          <h2>living in Oakland, CA</h2>
        </div>
    </>
  );
}
 
export default About;