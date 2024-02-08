import React from 'react';
import PropTypes from 'prop-types';
import { SignUp } from '@clerk/clerk-react';
//import { Test } from './Signup.styles';

const Signup = (props) => (
  <div className="SignupWrapper">
    <SignUp path="/register" routing="path" signInUrl="/sign-in" />
  </div>
);

Signup.propTypes = {
  // bla: PropTypes.string,
};

Signup.defaultProps = {
  // bla: 'test',
};

export default Signup;
