import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var networks = this.props.data.social.map(function (network) {
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }
    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#nav-hide" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#experiences">Experiences</a></li>
            <li><a className="smoothscroll" href="#skills">Skills</a></li>
            <li><a className="navbar-item" href="https://fathurmh.netlify.com" activeClassName="is-active" target="_blank">Blog</a></li>
          </ul>
        </nav>
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>I'm a <span>fresh college graduate</span> as <span>B.S. in Computational Science</span> from <span>Telkom University</span> who experienced and interested in <span>{occupation}</span>.</h3>
            <hr />
            <ul className="social">
              {networks}
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>
      </header>
    );
  }
}

export default Header;
