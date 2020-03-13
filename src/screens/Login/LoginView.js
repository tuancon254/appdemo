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
  mail: require('../../../assets/images/mail.png'),
  key: require('../../../assets/images/key.png'),
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

  render() {
    const { errorMessages } = this.state;
    const { onLoginDev, logging, onPressLogin } = this.props;

    console.log(this.props);

    return (
      <View style={styles.container}>
        <Image source={Resource.logo} style={styles.logo} />
        <View style={{ marginBottom: 10, width: '71%' }}>
          {errorMessages && (
            <Text style={{ color: '#E9446A' }}>{errorMessages} Try Again!</Text>
          )}
        </View>
        <View style={styles.loginContainer}>
          <View style={styles.usernameOrEmailWrapper}>
            <Image source={Resource.mail} style={styles.mailIcon} />
            <TextInput
              placeholder="Username or email"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              style={styles.usernameOrEmail}
              returnKeyType="next"
            />
          </View>

          <View style={styles.passwordWrapper}>
            <Image source={Resource.key} style={styles.passwordIcon} />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              style={styles.passwordInput}
              returnKeyType="done"
            />
          </View>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={onPressLogin}>
          <Text style={{ fontSize: 18 }}>Sign in</Text>
          {logging && (
            <ActivityIndicator size={'small'} style={styles.loadingIcon} />
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={onLoginDev}>
          <Text style={{ fontSize: 18 }}>Sign in Dev</Text>
          {logging && (
            <ActivityIndicator size={'small'} style={styles.loadingIcon} />
          )}
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={{ marginTop: 16, color: '#fff', alignContent: 'center' }}
          >
            Forgot your password?
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginView;
