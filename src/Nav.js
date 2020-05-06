import React from 'react';

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <a onClick={() => {
              props.scrollToAbout.current.scrollIntoView({ behavior: 'smooth' });
              }}>About</a>
        </li>
        <li>
          <a onClick={() => {
                props.scrollToProjects.current.scrollIntoView({ behavior: 'smooth' });}}>Projects</a>
        </li>
        <li>
          <a onClick={() => {
                props.scrollToContact.current.scrollIntoView({ behavior: 'smooth' });
              }}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
 
export default Nav;