import React from 'react';

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <a onClick={() => {
              props.scrollToAbout.current.scrollIntoView({ behavior: 'smooth' });
              }}>ABOUT</a>
        </li>
        <li>
          <a onClick={() => {
                props.scrollToProjects.current.scrollIntoView({ behavior: 'smooth' });}}>PROJECTS</a>
        </li>
        <li>
          <a onClick={() => {
                props.scrollToContact.current.scrollIntoView({ behavior: 'smooth' });
              }}>CONTACT</a>
        </li>
      </ul>
    </nav>
  );
}
 
export default Nav;