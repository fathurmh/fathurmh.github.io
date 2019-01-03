import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  state = {
    isActive: false
  };

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };

  render() {
    return <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="../blog">
              <h1>psychode.</h1>
            </a>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item is-active" href="">Home</a>
              <NavLink className="navbar-item" to="/" activeClassName="is-active" target="_blank">
                Resume
              </NavLink>
            </div>
          </div>
        </div>
      </nav>;
      }
    }

    export default Header;
