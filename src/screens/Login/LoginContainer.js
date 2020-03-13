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

  onPressLogin = async () => {
    const { email, password } = this.state;

    if (!!email && !!password) {
      this.setState({ logging: true });

      try {
        const result = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        this.setState({ logging: false });
        this.props.navigation.navigate('RootStackNavigator', email);
      } catch (e) {
        alert(e.message);
      }
    }
  };

  onLoginDev = async () => {
    this.setState({ logging: true });

    try {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword('test@gmail.com', '123456');
      this.setState({ logging: false });
      this.props.navigation.navigate('RootStackNavigator', {
        email: result.user.email,
      });
    } catch (e) {
      alert(e.message);
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
