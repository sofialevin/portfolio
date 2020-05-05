import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="content">Coming soon...</h1>
      </header>
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
