import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Nav = (props) => {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const delta = 5;
    const isVisible = prevScrollpos > currentScrollPos;

    if (Math.abs(prevScrollpos - currentScrollPos) <= delta) { return; }

    setPrevScrollpos(currentScrollPos);
    if (currentScrollPos < 70) {
      setVisible(true);
    } else {
      setVisible(isVisible);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <nav className={visible ? null : 'navbar--hidden'}>
      <ul>
        <li>
          <a
            href="#about"
            onClick={() => {
              props.scrollToAbout.current.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={() => {
              props.scrollToProjects.current.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => {
              props.scrollToContact.current.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  scrollToProjects: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  scrollToContact: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  scrollToAbout: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default Nav;
