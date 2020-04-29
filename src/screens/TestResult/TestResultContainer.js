import React,  {Component }from 'react'; 
import TestResultScreens from './TestResultScreens';
import firebase from '../../services/FirebaseConfig';

class TestResultContainer extends Component {
  constructor(props) {
    global.uid = firebase.auth().currentUser.uid; 
    global.chapterDones = [];
    super(props); 
    this.state =  {
      profile: {},
      chapterDone: {
          title: '',
          score: ''
      },
      averageScore: 0
    }; 
  }

  getProfile16KX1 = async () =>  {
    try {
      await firebase
        .database()
        .ref()
        .child('/Profile/0/_16KX1/' + uid)
        .on('value', snap =>  {
          if (snap.val() == null) {
            this._getProfile16KX3()
          }
          else this.setState( {profile:snap.val()}); 
        }); 
    }catch (e) {
      alert(e.message); 
    }
  }; 

  _getProfile16KX3 = async () =>  {
    try {
      await firebase
        .database()
        .ref()
        .child('/Profile/1/_16KX3/' + uid)
        .on('value', snap =>  {
          if (snap.val() == null) {
            this._getProfile17XPluss()
          }
          else this.setState( {profile:snap.val()}); 
        }); 
    }catch (e) {
      alert(e.message); 
    }
  }; 

  _getProfile17XPluss = async () =>  {
    try {
      await firebase
        .database()
        .ref()
        .child('/Profile/2/_17X+/' + uid)
        .on('value', snap =>  {
          if (snap.val() == null) {
            this._getProfile17X2()
          }
          else this.setState( {profile:snap.val()}); 
        }); 
    }catch (e) {
      alert(e.message); 
    }
  }; 

  _getProfile17X2 = async () =>  {
    try {
      await firebase
        .database()
        .ref()
        .child('/Profile/3/_17X2/' + uid)
        .on('value', snap =>  {
          if (snap.val() == null) {
            this._getProfile17XN()
          }
          else this.setState( {profile:snap.val()}); 
        }); 
    }catch (e) {
      alert(e.message); 
    }
  }; 

  _getProfile17XN = async () =>  {
    try {
      await firebase
        .database()
        .ref()
        .child('/Profile/4/_17XN/' + uid)
        .on('value', snap =>  {
          this.setState( {profile:snap.val()}); 
        }); 
    }catch (e) {
      alert(e.message); 
    }
  }; 

  _setChapterDones = async () =>  {
    var sum = 0;
    try {
      await firebase
        .database()
        .ref()
        .child('/TestInfo')
        .on('value', snap =>  {
          this.testInfo = snap.val(); 
        }); 
        for (let index = 0; index < this.testInfo.length; index++) {
          await firebase
            .database()
            .ref()
            .child('/TestInfo/' + index + '/' + 'CH' + (index + 1) + '/' + this.state.profile.class + '/' + uid)
            .on('value', snap =>  {
              if (snap.val() != null) {
                this.setState({
                    chapterDone:{
                        title: 'Chương '+ (index+1),
                        score: snap.val().scores
                    }
                })
                console.log("dkm = "+ snap.val().scores);
                sum += snap.val().scores;
                chapterDones.push(this.state.chapterDone);
              }
            }); 
        }
        this.setState({averageScore: (sum/chapterDones.length).toFixed(2)});
    }catch (e) {
      alert(e.message); 
    }
  }

  componentDidMount() {
    this.getProfile16KX1().done(); 
    this._setChapterDones().done(); 
  }

  render() {
    const { profile, averageScore } = this.state;
    return < TestResultScreens {...this.props}
                profile={profile}
                chapterDone={chapterDones}
                averageScore={averageScore}
            /> ; 
  }
}

export default TestResultContainer; 
