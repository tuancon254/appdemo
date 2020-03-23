import React, { Component } from 'react';
import LoginView from './LoginView';
import firebase from '../../services/FirebaseConfig';

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logging: false,
    };
  }

  onPressLogin = async (email, password) => {
    if (email && password) {
      this.setState({ logging: true });
      try {
        const result = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        this.setState({ logging: false });
        this.props.navigation.navigate('RootStackNavigator', {
          email: result.user.email,
        });
      } catch (error) {
        alert(e.message);
        this.setState({ logging: false });
      }
    }
  };

  onLoginDev = async () => {
    this.setState({ logging: true });
    try {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword('test@gmail.com', '123456');
      this.props.navigation.navigate('RootStackNavigator', {
        email: result.user.email,
      });
      this.setState({ logging: false });
    } catch (e) {
      alert(e.message);
      this.setState({ logging: false });
    }
  };

  render() {
    const { logging } = this.state;

    return (
      <LoginView
        onLoginDev={this.onLoginDev}
        logging={logging}
        onPressLogin={this.onPressLogin}
      />
    );
  }
}

export default LoginContainer;
