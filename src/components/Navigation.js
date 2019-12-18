import React from 'react';
import logo from '../logo.png';
import defaultUser from '../user.png';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class Navigation extends React.Component {
  state = {
    uploadedProfileImage: null
  }
  render() {
    let { uploadedProfileImage } = this.props;
    let profileImage;

    if (Object.entries(uploadedProfileImage.response).length === 0 && uploadedProfileImage.response.constructor === Object) {
      profileImage = defaultUser;
    } else {
      profileImage = uploadedProfileImage.response.data.link
    }
    return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/"><img src={logo} className="logo" alt="logo" /></a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              </ul>
            </div>
            <img className="userProfileImage" src={profileImage} alt="user" />
          </nav>
    )
  }
}
Navigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { uploadedProfileImage } = state;
  return {
    uploadedProfileImage,
  }
}


export default connect(mapStateToProps)(Navigation);