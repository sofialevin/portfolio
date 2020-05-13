import React, {createRef} from 'react';
import './App.scss';

import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  const scrollToContact = createRef();
  const scrollToProjects = createRef();
  const scrollToAbout = createRef();

  return (
    <div className="App">
      <header>
        <Nav scrollToContact={scrollToContact} scrollToProjects={scrollToProjects} scrollToAbout={scrollToAbout}/>
      </header>
        <div className="main">
        <section className="header">
            <h1>Sofia Levin</h1>
            <h2>Full Stack Web Developer</h2>
          <a onClick={() => {
                scrollToAbout.current.scrollIntoView({ behavior: 'smooth' });
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
          <Contact />
        </section>
      </div>
      <footer className="links">
       
      </footer>
    </div>
  );
}

export default App;
