import React, { Component } from 'react';
import firebase from '../../services/FirebaseConfig';
import { View } from 'react-native';

class SignOut extends Component {
  componentDidMount() {
    firebase.auth().signOut();
  }

  render() {
    return <View />;
  }
}

export default SignOut;
