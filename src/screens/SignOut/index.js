import React, { Component } from 'react';
import SignOutContainer from './SignOutContainer';

class SignOut extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <SignOutContainer {...this.props} />;
  }
}

export default SignOut;
