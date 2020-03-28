import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView
} from 'react-native';
import styles from './styles';
import firebase from '../../../services/FirebaseConfig';
const Resource = {
  logo: require('../../../../assets/images/logo.png'),
  mail: require('../../../../assets/icons/Email.png'),
  key: require('../../../../assets/icons/Pasword.png'),
};

class LoginView extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errorMessage: null,
      secureTextEntry: true
    };
  }

  componentWillUnmount() {
    this.setState({
      email: '',
      password: '',
      errorMessages: null,
      logging: false,
    });
  }



  onPressVisible = () => {
    this.state.secureTextEntry == true ?
      this.setState({
        secureTextEntry: false
      }) :
      this.setState({
        secureTextEntry: true
      });
    return (
      <Image source={require('../../../../assets/icons/visibility.png')} style={{ width: 24, height: 20, borderWidth: 1, marginRight: 4, marginTop: 8 }} />
    )
  }

  render() {
    const {errorMessage, email, password } = this.state;
    const { logging, onPressLogin,onPressForgot} = this.props;

    return (
      <KeyboardAvoidingView style={styles.container} behavior="height">

        {/* logo  */}
        <View style={styles.logoContainer}>
          <Image source={Resource.logo} style={styles.logo} />
        </View>

        <View style={styles.loginContainer}>
          <View style={styles.hello}>
            <Text style={styles.helloText}>Xin chào!</Text>
          </View>
          <View>
            <View style={styles.usernameOrEmailWrapper}>
              <View style={styles.mailIconWrapper}>
                <Image source={Resource.mail} style={styles.mailIcon} />
              </View>

              <View style={styles.textInput}>
                <Text style={{ fontSize: 12 }}>Email</Text>

                <TextInput
                  placeholder="Email address"
                  value={this.state.email}
                  onChangeText={email => this.setState({ email })}
                  returnKeyType="next"
                  style={{ fontSize: 17, color: "#586BCA", marginTop: 3, flex: 1 }}
                />

              </View>

              <Image />
            </View>

            <View style={styles.usernameOrEmailWrapper}>
              <View style={styles.mailIconWrapper}>
                <Image source={Resource.key} style={styles.passwordIcon} />
              </View>
              <View style={styles.textInput}>
                <Text style={{ fontSize: 12 }}>Password</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TextInput
                    placeholder="Password"
                    secureTextEntry={this.state.secureTextEntry}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    style={styles.passwordInput}
                    returnKeyType="done"
                    onFocus={() => { }}

                  />
                  <TouchableOpacity onPress={this.onPressVisible}>
                    {this.state.secureTextEntry == true
                      ?
                      <Image source={require('../../../../assets/icons/visibility_off.png')} style={styles.visibleIcon} />
                      :
                      <Image source={require('../../../../assets/icons/visibility.png')} style={styles.visibleIcon} />}
                  </TouchableOpacity>

                </View>

              </View>

            </View>

          </View>
          <View style={{ marginTop: 32 }}>
            <View style={{ marginBottom: 10 }}>
              {errorMessage && (
                <Text style={{ color: '#E9446A' }}>{errorMessage} Try Again!</Text>
              )}
            </View>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => onPressLogin(email, password)}
            >
              <Text style={{ fontSize: 16, color: 'white' }}>Đăng nhập</Text>
              {logging && (
                <ActivityIndicator size={'small'} style={styles.loadingIcon} />
              )}
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 16, marginLeft: 12 }}>
            <TouchableOpacity onPress={onPressForgot}>
              <Text style={{ color: "#586BCA" }}>Quên mật khẩu?</Text>
            </TouchableOpacity>
          </View>
        </View>

      </KeyboardAvoidingView>
    );
  }
}

export default LoginView;
