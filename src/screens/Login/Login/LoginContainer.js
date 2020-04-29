import React, { Component } from 'react';
import LoginView from './LoginView';
import firebase from '../../../services/FirebaseConfig';
import {
  Alert,
} from 'react-native';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    global.uid = '';
    this.state = {
      logging: false,
    };
  }

  onPressLogin = async (email, password) => {
    if (!email || !password){
      Alert.alert(
          'Message!',
          'Thông tin đăng nhập không được bỏ trống.',
          [
            {
              text: 'OK',
              style: 'cancel',
            }
          ],
          {cancelable: true},
        );
    }
    else if (email && password) {
      this.setState({ logging: true });
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        this.setState({ logging: false });
        this.uid = firebase.auth().currentUser.uid;
        this.getProfile16KX1();
      } catch (e) {
        alert(e)
        Alert.alert(
          'Đăng nhập thất bại!',
          'Thông tin đăng nhập không chính xác, vui lòng kiểm tra lại.',
          [
            {
              text: 'OK',
              style: 'cancel',
              onPress: () => this.props.navigation.navigate('Login'),
            }
          ],
          {cancelable: true},
        );
        this.setState({ logging: false });
      }
    }
  };

  onPressForgot = () =>{
    this.props.navigation.navigate('ForgotPassword')
  }

  getProfile16KX1 = async () => {
    try {
        await firebase
        .database()
        .ref()
        .child('/Profile/0/_16KX1/' + this.uid)
        .on('value', snap => {
          if(snap.val() == null){
            this._getProfile16KX3()
          }
          else this.props.navigation.navigate('RootStackNavigator');
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
        .child('/Profile/1/_16KX3/' + this.uid)
        .on('value', snap => {
          alert('bbb'+snap)
          if(snap.val() == null){
            this._getProfile17XPluss()
          }
          else this.props.navigation.navigate('RootStackNavigator');
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
        .child('/Profile/2/_17X+/' + this.uid)
        .on('value', snap => {
          if(snap.val() == null){
            this._getProfile17X2()
          }
          else this.props.navigation.navigate('RootStackNavigator');
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
        .child('/Profile/3/_17X2/' + this.uid)
        .on('value', snap => {
          if(snap.val() == null){
            this._getProfile17XN()
          }
          else this.props.navigation.navigate('RootStackNavigator');
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
        .child('/Profile/4/_17XN/' + this.uid)
        .on('value', snap => {
          if(snap.val() == null){
            Alert.alert(
              'Đăng nhập thất bại!',
              'Tài khoản của bạn hiện không thuộc lớp nào, vui lòng kiểm tra lại hoặc liên hệ với giáo viên bộ môn để xác nhận.',
              [
                {
                  text: 'OK',
                  style: 'cancel',
                  
                }
              ],
              {cancelable: true},
            );
            return 0;
          }
          else this.props.navigation.navigate('RootStackNavigator');
        });
    } catch (e) {
      alert(e.message);
    }
  };

  render() {
    const { logging } = this.state;

    return (
      <LoginView
        logging={logging}
        onPressLogin={this.onPressLogin}
        onPressForgot={this.onPressForgot}
      />
    );
  }
}

export default LoginContainer;
