import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className} />
            </a>
          </li>
        );
      });
    }
    return <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>
            <ul className="copyright">
              Built with <a href="https://reactjs.org/" target="_blank">
                <strong>React</strong>
              </a> by <a href="https://fathurmh.github.io" target="_blank"><strong>Fathurahman Ma'ruf Hudoarma</strong></a>
              <br />
              <li>&copy; Copyright 2018</li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
      </footer>;
  }
}

export default Footer;
