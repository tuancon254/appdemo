import React, { Component } from 'react';
import firebase from '../../services/FirebaseConfig';
import { View } from 'react-native';

class SignOut extends Component {
  componentDidMount() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('Sign out');
        this.props.navigation.navigate('Login', { onReset: 'reset' });
      })
      .catch(e => console.log(e.message));
  }

  render() {
    return <View />;
  }
}

export default SignOut;
