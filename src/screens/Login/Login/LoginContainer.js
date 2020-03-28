import React, { Component } from 'react';
import LoginView from './LoginView';
import firebase from '../../../services/FirebaseConfig';

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logging: false,
      errorMessages: null
    };
  }

  onPressLogin = async (email, password) => {
    if (email && password) {
      this.setState({ logging: true });
      try {
        const result = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .catch((error) => { this.setState({ errorMessages: error.message }) })
        this.setState({ logging: false });
        if (firebase.auth().additionalUserInfo.isNewUser === true) {
          this.props.navigation.navigate('changePasswordStackNavigator', {
            email: result.user.email,
          });
        }
        else {
          this.props.navigation.navigate('RootStackNavigator', {
            email: result.user.email,
          });
        }
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

  onPressForgot = () => {
    this.props.navigation.navigate('ForgotPassword')
  }
  render() {
    const { logging } = this.state.logging;
    return (
      <LoginView
        onLoginDev={this.onLoginDev}
        logging={logging}
        onPressLogin={this.onPressLogin}
        onPressForgot={this.onPressForgot}
        errorMessage={this.state.errorMessages}
      />
    );
  }
}

export default LoginContainer;
