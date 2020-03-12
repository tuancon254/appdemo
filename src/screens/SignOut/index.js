import React, { Component } from 'react';
import firebase from '../../services/FirebaseConfig';
import { View } from 'react-native';
import ActivityIndicator from 'react-native-web/dist/exports/ActivityIndicator';

class SignOut extends Component {
  componentDidMount() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('Sign out');
        this.props.navigation.navigate('LoginStackNavigator');
      })
      .catch(e => console.log(e.message));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
}

export default SignOut;
