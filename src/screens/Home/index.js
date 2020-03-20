import React, { Component } from 'react';
import HomeContainer from './HomeContainer';
import firebase from '../../services/FirebaseConfig';

class Home extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const database = firebase.database();
    const userId = firebase.auth().currentUser.uid;

    database
      .ref()
      .child('/Chuong1/')
      .on('value', snap => console.log(snap.val()));
  }

  render() {
    return <HomeContainer {...this.props} />;
  }
}

export default Home;
