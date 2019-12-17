import React from 'react';
import logo from '../logo.png';
import defaultUser from '../user.png';

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/"><img src={logo} className="logo" alt="logo" /></a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          </ul>
        </div>
        <img className="userProfileImage" src={defaultUser} alt="user" />
      </nav>
    )
  }
}

export default Navigation;