import React, { useState, useEffect, createRef } from 'react';
import './App.scss';

import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  const [visible, setVisible] = useState(true)

  const scrollToContact = createRef();
  const scrollToProjects = createRef();
  const scrollToAbout = createRef();

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 5) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

// const handleScroll = () => {

//     const currentScrollPos = window.pageYOffset;
//     const delta = 5;
//     const isVisible = prevScrollpos > currentScrollPos;

//     if(Math.abs(prevScrollpos - currentScrollPos) <= delta)
//         return;

//     setPrevScrollpos(currentScrollPos)
//     if (currentScrollPos < 70) {
//       setVisible(true)
//     } else {
//       setVisible(isVisible)

//       console.log(prevScrollpos)
//       console.log(currentScrollPos)
//     }
//   };




  return (
    <div className="App">
      <header>
        <Nav scrollToContact={scrollToContact} scrollToProjects={scrollToProjects} scrollToAbout={scrollToAbout}/>
      </header>
        <div className="main">
        <section className="header">
          <div className="headline">
            <h1>Sofia&nbsp;Levin</h1>
            <h2>Full&nbsp;Stack&nbsp;Web&nbsp;Developer</h2>
          </div>
          {
            visible ? <a onClick={() => {
              scrollToAbout.current.scrollIntoView({ behavior: 'smooth' });
                }}><span></span></a> : null
          }
        </section>
        <section ref={scrollToAbout} className="about-section">
          <About />
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
