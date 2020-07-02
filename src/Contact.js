import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => (
  <>
    <h3>Contact</h3>
    <h4>Get In Touch!</h4>
    <p>
      Want to work together or just find out about what I&apos;m up to?
      <br />
      Leave me a message and I&apos;ll get back to you soon!
    </p>
    <form name="contact" method="POST">
      <input type="hidden" name="form-name" id="form-name" value="contact" />
      <label htmlFor="name" />
      <input type="text" placeholder="Name" name="name" id="name" aria-label="Name"/>
      <label htmlFor="email" />
      <input type="email" placeholder="Email" name="email" id="email" aria-label="Email"/>
      <label htmlFor="message" />
      <textarea name="message" placeholder="Message" id="message" aria-label="Message"/>
      <button type="submit">Send</button>
    </form>
    <div className="social-links">
      <a href="https://github.com/sofialevin" aria-label="GitHub">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/sofiaflevin/" aria-label="LinkedIn">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://twitter.com/sofiaflevin" aria-label="Twitter">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
  </>
);

export default Contact;
