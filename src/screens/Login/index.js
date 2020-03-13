import React, { Component } from 'react';
import LoginContainer from './LoginContainer';

class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return <LoginContainer {...this.props} />;
  }
}

export default Login;
