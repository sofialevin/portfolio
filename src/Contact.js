import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (<>
  <h3>Contact</h3>
  <h4>Get In Touch!</h4>
  <p>Want to work together or just find out about what I'm up to? Leave me a message and I'll get back to you soon!</p>
  <form name="contact" method="POST">
    <input type="hidden" name="form-name" value="contact" />
    <input type="text" placeholder="Name" name="name" />  
    <input type="email" placeholder="Email" name="email" />
    <textarea name="message" placeholder="Message"></textarea>
    <button type="submit">Send</button>
</form>
<div className="social-links">
  <a href="https://github.com/sofialevin">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/sofiaflevin/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://twitter.com/sofiaflevin">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
</div>

  
  
  </>);
}
 
export default Contact;