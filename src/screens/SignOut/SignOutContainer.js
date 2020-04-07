import React, { Component } from 'react';
import SignOutView from './SignOutView';
import firebase from '../../services/FirebaseConfig';

class SignOutContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.navigation.navigate('Login');
      })
      .catch(e => console.log(e.message));
  }

  render() {
    return <SignOutView {...this.props} />;
  }
}

export default SignOutContainer;
