import React from 'react';
import PropTypes from 'prop-types';
import { UserProfile } from "@clerk/clerk-react";

const UsersProfile = (props) => (
  <div className="UserProfileWrapper">
    <UserProfile path="/profile" routing="path" />
  </div>
);

UserProfile.propTypes = {
  // bla: PropTypes.string,
};

UserProfile.defaultProps = {
  // bla: 'test',
};

export default UsersProfile;
