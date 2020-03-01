import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import firebase from '../../services/FirebaseConfig';

const Resource = {
  logo: require('../../../assets/images/logo.png'),
  mail: require('../../../assets/images/mail.png'),
  key: require('../../../assets/images/key.png'),
};

class Login extends React.Component {

    state = {
      email: '',
      password: '',
      errorMessages:null
    };
  

  onPressLogin = () => {
    const  {email,password} = this.state
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(result => {
        console.warn(result)
        this.props.navigation.navigate('HomeScreen', email);
      })
      .catch((e) => this.setState({errorMessages: e.message}))
    
    };

  render() {

    return (
      <View style={styles.container}>
        <Image source={Resource.logo} style={styles.logo} />
    <View style={{marginBottom:10,width:"71%"}}>{this.state.errorMessages && <Text style={{color:'#E9446A'}}>{this.state.errorMessages} Try Again!</Text>}</View>
        <View style={styles.loginContainer}>
          <View style={styles.usernameOrEmailWrapper}>
            <Image source={Resource.mail} style={styles.mailIcon} />
            <TextInput
              placeholder="Username or email"
              value={this.state.email}
              onChangeText={email => this.setState({email})}
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
              onChangeText={password => this.setState({password})}
              style={styles.passwordInput}
              returnKeyType="done"
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={this.onPressLogin}
        >
          <Text style={{ fontSize: 18 }}>Sign in</Text>
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

export default Login;
