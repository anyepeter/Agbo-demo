import React from 'react';
import { SignIn } from "@clerk/clerk-react";
//import { Test } from './SignIn.styles';

const SignIsn = (props) => (
  <div className="w-full flex justify-center items-center h-screen">
    <SignIn path="/sign-in" routing="path" signUpUrl="/register" />
  </div>
);

SignIn.propTypes = {
  // bla: PropTypes.string,
};

SignIn.defaultProps = {
  // bla: 'test',
};

export default SignIsn;
