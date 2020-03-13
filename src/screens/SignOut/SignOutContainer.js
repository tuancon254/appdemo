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
        // Handle when sign out successful
      })
      .catch(e => console.log(e.message));
  }

  render() {
    return <SignOutView {...this.props} />;
  }
}

export default SignOutContainer;
