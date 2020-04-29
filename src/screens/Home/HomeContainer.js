import React, { Component } from 'react';
import HomeView from './HomeView';
import firebase from '../../services/FirebaseConfig';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    global.uid = firebase.auth().currentUser.uid;
    global.testInfo = [];
    global.chapterDones = new Array();
    this.state = {
      chapters: [],
      profile: {},
      chapterDone: new Array()
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

  getProfile16KX1 = async () => {
    try {
      await firebase
        .database()
        .ref()
        .child('/Profile/0/_16KX1/' + uid)
        .on('value', snap => {
          if(snap.val() == null){
            this._getProfile16KX3()
          }
          else this.setState({ profile: snap.val()});
        });
    } catch (e) {
      alert(e.message);
    }
  };

  _getProfile16KX3 = async () => {
    try {
      await firebase
        .database()
        .ref()
        .child('/Profile/1/_16KX3/' + uid)
        .on('value', snap => {
          if(snap.val() == null){
            this._getProfile17XPluss()
          }
          else this.setState({ profile: snap.val()});
        });
    } catch (e) {
      alert(e.message);
    }
  };

  _getProfile17XPluss = async () => {
    try {
      await firebase
        .database()
        .ref()
        .child('/Profile/2/_17X+/' + uid)
        .on('value', snap => {
          if(snap.val() == null){
            this._getProfile17X2()
          }
          else this.setState({ profile: snap.val()});
        });
    } catch (e) {
      alert(e.message);
    }
  };

  _getProfile17X2 = async () => {
    try {
      await firebase
        .database()
        .ref()
        .child('/Profile/3/_17X2/' + uid)
        .on('value', snap => {
          if(snap.val() == null){
            this._getProfile17XN()
          }
          else this.setState({ profile: snap.val()});
        });
    } catch (e) {
      alert(e.message);
    }
  };

  _getProfile17XN = async () => {
    try {
      await firebase
        .database()
        .ref()
        .child('/Profile/4/_17XN/' + uid)
        .on('value', snap => {
          this.setState({ profile: snap.val()});
        });
    } catch (e) {
      alert(e.message);
    }
  };

  _setChapterDones = async () =>{
    try {
      await firebase
        .database()
        .ref()
        .child('/TestInfo')
        .on('value', snap => {
          this.testInfo = snap.val();
        });
        for(let index = 0 ; index < this.testInfo.length; index++){
          await firebase
            .database()
            .ref()
            .child('/TestInfo/'+index+'/'+'CH'+(index+1)+'/'+this.state.profile.class+'/'+ uid)
            .on('value', snap => {
              if(snap.val() != null){
                chapterDones.push(index + '-' + snap.val().status);
                //console.log("vao day");
              }
              //console.log("DKM = "+'/TestInfo/'+index+'/'+'CH'+(index+1)+'/'+this.state.profile.class+'/');
            });
        }
        this.setState({ chapterDone: chapterDones });
    } catch (e) {
      alert(e.message);
    }
  }

  componentDidMount() {
    this.getChapters().done();
    this.getProfile16KX1().done();
    this._setChapterDones().done();
  }

  render() {
    const { chapters, profile, chapterDone } = this.state;
    return <HomeView {...this.props} 
            chapters={chapters}
            profile={profile} 
            chapterDone={chapterDone}
          />;
  } 
}

export default HomeContainer;