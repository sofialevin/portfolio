import React, { useState, useEffect, createRef } from 'react';
import './App.scss';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  const [visible, setVisible] = useState(true);

  const scrollToContact = createRef();
  const scrollToProjects = createRef();
  const scrollToAbout = createRef();

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 5) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div className="App">
      <header>
        <Nav
          scrollToContact={scrollToContact}
          scrollToProjects={scrollToProjects}
          scrollToAbout={scrollToAbout}
        />
      </header>
      <div className="main">
        <section className="header">
          <div className="headline">
            <h1>Sofia&nbsp;Levin</h1>
            <h2>Full&nbsp;Stack&nbsp;Web&nbsp;Developer</h2>
          </div>
          {
            visible ? (
              <a
                href="#about"
                aria-label="About"
                onClick={() => {
                  scrollToAbout.current.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span />
              </a>
            ) : null
          }
        </section>
        <section ref={scrollToAbout} className="about-section" id="about">
          <About />
        </section>
        <section ref={scrollToProjects} className="projects-section" id="projects">
          <Projects />
        </section>
        <section ref={scrollToContact} id="contact" className="contact-section">
          <Contact />
        </section>
      </div>
      <footer className="links" />
    </div>
  );
}

export default App;
