import React, {createRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './App.scss';
import Sofia from './IMG_0399.JPG';

import Nav from './Nav';
import About from './About';
import Projects from './Projects';

function App() {
  const scrollToContact = createRef();
  const scrollToProjects = createRef();
  const scrollToAbout = createRef();

  return (
    <div className="App">
      <header>
        <Nav scrollToContact={scrollToContact} scrollToProjects={scrollToProjects} scrollToAbout={scrollToAbout}/>
      </header>
      <section className="header">
          <h1>Sofia Levin</h1>
          <h2>Full Stack Web Developer</h2>
        <a onClick={() => {
              scrollToProjects.current.scrollIntoView({ behavior: 'smooth' });
              }}><span></span>
        </a>
      </section>
      <section ref={scrollToAbout} className="about-section">
        <About />
        <a onClick={() => {
              scrollToProjects.current.scrollIntoView({ behavior: 'smooth' });
              }}><span></span></a>
      </section>
      <section ref={scrollToProjects} className="projects-section">
        <Projects />
      </section>
      <section ref={scrollToContact} id="contact" className="contact-section">
         <a href="https://github.com/sofialevin">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/sofiaflevin/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/sofiaflevin">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </section>
      <footer className="links">
       
      </footer>
    </div>
  );
}

export default App;
