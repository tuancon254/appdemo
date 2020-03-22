import React, { Component } from 'react';
import HomeView from './HomeView';
import firebase from '../../services/FirebaseConfig';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.uid = firebase.auth().currentUser.uid;
    this.state = {
      chapters: [],
      profile: {},
    };
  }

  getChapters = async () => {
    try {
      await firebase
        .database()
        .ref()
        .child('/Chapters')
        .on('value', snap => {
          this.setState({ chapters: snap.val() });
        });
    } catch (e) {
      alert(e.message);
    }
  };

  getProfile = async () => {
    try {
      await firebase
        .database()
        .ref()
        .child('/Profile/0/17CN1/' + this.uid)
        .on('value', snap => {
          console.log('cascac', snap.val());
          this.setState({ profile: snap.val() });
        });
    } catch (e) {
      alert(e.message);
    }
  };

  componentDidMount() {
    this.getChapters().done();
    this.getProfile().done();
  }

  render() {
    const { chapters, profile } = this.state;

    return <HomeView {...this.props} chapters={chapters} profile={profile} />;
  }
}

export default HomeContainer;