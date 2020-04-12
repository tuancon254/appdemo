import React, { Component } from 'react';
import SignOutContainer from './SignOutContainer';

class SignOut extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
  }

  render() {
    return <SignOutContainer {...this.props} />;
  }
}

export default SignOut;
