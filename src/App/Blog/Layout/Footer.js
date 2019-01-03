import React from "react";

const Footer = () => (
  <footer>
    <div className="container">
      <ul className="social-links">
        <li key="facebook">
          <a href="https://www.facebook.com/fathurmh">
            <i className="fab fa-facebook" />
          </a>
        </li>
        <li key="twitter">
          <a href="https://www.twitter.com/fathurmh">
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li key="instagram">
          <a href="https://www.instagram.com/fathurmh">
            <i className="fab fa-instagram" />
          </a>
        </li>
        <li key="linkedin">
          <a href="https://www.linkedin.com/in/fathurmh">
            <i className="fab fa-linkedin" />
          </a>
        </li>
        <li key="github">
          <a href="https://github.com/fathurmh">
            <i className="fab fa-github" />
          </a>
        </li>
        <li key="mail">
          <a href="mailto:fathur.mh@gmail.com">
            <i className="far fa-envelope" />
          </a>
        </li>
      </ul>
      Built on <strong>React</strong> by{" "}
      <strong>Fathurahman Ma'ruf Hudoarma</strong>
      <br />
      &copy; Copyright 2018
    </div>
  </footer>
);
export default Footer;
