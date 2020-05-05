import React, {createRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './App.css';

import Nav from './Nav';

function App() {
  const scrollToContact = createRef();
  const scrollToProjects = createRef();
  const scrollToAbout = createRef();

  return (
    <div className="App">
      <Nav scrollToContact={scrollToContact} scrollToProjects={scrollToProjects} scrollToAbout={scrollToAbout}/>
      <section ref={scrollToAbout} className="about-section">
        <h1 className="content">Coming soon...</h1>
      </section>
      <section ref={scrollToProjects} className="projects-section"></section>
      <section ref={scrollToContact} className="contact-section"></section>
      <footer className="links">
        <a href="https://github.com/sofialevin">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/sofiaflevin/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/sofiaflevin">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </footer>
    </div>
  );
}

export default App;
