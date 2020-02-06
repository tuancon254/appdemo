import React, { Component } from "react";
import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const Resource = {
  logo: require("../../../assets/images/logo.png"),
  mail: require("../../../assets/images/mail.png"),
  key: require("../../../assets/images/key.png")
};

class Login extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerMode: "block"
  });

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  onPressLogin = () => {
    this.props.navigation.navigate("Home");
  };

  handleUserChange = (text) => {
    this.setState({ userName: text });
  }

  handlePasswordChange = (text) => {
    this.setState({ password: text });
  }

  render() {
    const { username, password } = this.state;

    return (
      <View style={styles.container}>
        <Image source={Resource.logo} style={styles.logo} />

        <View style={styles.loginContainer}>
          <View style={styles.usernameOrEmailWrapper}>
            <Image source={Resource.mail} style={styles.mailIcon} />
            <TextInput
              placeholder="Username or email"
              value={username}
              onChangeText={this.handleUserChange}
              style={styles.usernameOrEmail}
              returnKeyType="next"
            />
          </View>

          <View style={styles.passwordWrapper}>
            <Image source={Resource.key} style={styles.passwordIcon} />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={text => this.handlePasswordChange(text)}
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
          <Text style={{ marginLeft: 150, marginTop: 3, color: "#fff" }}>
            Forgot your password?
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
