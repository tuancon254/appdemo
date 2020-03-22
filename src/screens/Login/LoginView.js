import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import firebase from '../../services/FirebaseConfig';

const Resource = {
  logo: require('../../../assets/images/logo.png'),
  mail: require('../../../assets/icons/Email.png'),
  key: require('../../../assets/icons/Pasword.png'),
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
      errorMessages: null,
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
      <Image source={require('../../../assets/icons/visibility.png')} style={{ width: 24, height: 20, borderWidth: 1, marginRight: 4, marginTop: 8 }} />
    )
  }


  render() {
    const { errorMessages, email, password } = this.state;
    const { onLoginDev, logging, onPressLogin } = this.props;

    return (
      <View style={styles.container}>

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
                  placeholder="Username or email"
                  value={this.state.email}
                  onChangeText={email => this.setState({ email })}
                  returnKeyType="next"
                  style={{ fontSize: 17, color: "#586BCA", marginTop: 3 }}
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
                   
                     />
                  <TouchableOpacity onPress={this.onPressVisible}>
                    {this.state.secureTextEntry == true
                      ?
                      <Image source={require('../../../assets/icons/visibility_off.png')} style={styles.visibleIcon}/>
                      :
                      <Image source={require('../../../assets/icons/visibility.png')} style={styles.visibleIcon}/>}
                  </TouchableOpacity>

                </View>
              </View>

            </View>

          </View>
          <View style={{ marginTop: 32 }}>
            <View style={{ marginBottom: 10 }}>
              {errorMessages && (
                <Text style={{ color: '#E9446A' }}>{errorMessages} Try Again!</Text>
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

        </View>
      </View>
    );
  }
}

export default LoginView;
