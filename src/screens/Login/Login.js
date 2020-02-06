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
      useName: "abc"
    };
  }

  onPressLogin = () => {
    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={Resource.logo} style={styles.logo} />

        <View
          style={{
            backgroundColor: "white",
            width: "70%",
            height: 90,
            borderRadius: 5,
            flexDirection: "column",
            alignContent: "flex-start",
            alignItems: "center"
          }}
        >
          <View style={styles.usernameOrEmailWrapper}>
            <Image source={Resource.mail} style={styles.mailIcon} />
            <TextInput
              placeholder="Username or email"
              value={this.state.username}
              onChangeText={text => this.handleUserChange(text)}
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
              onChangeText={text => this.handlePasswordChange(text)}
              style={styles.passwordInput}
              returnKeyType="done"
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => this.onPressLogin()}
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
