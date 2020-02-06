import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3b5998",
  },
  logo: {
    width: 128,
    height: 118,
    marginBottom: 80
  },
  mailIcon: {
    width: 30,
    height: 30,
    marginTop: 8,
    marginLeft: 10
  },
  usernameOrEmail: {
    width: "65%",
    height: "100%",
    marginLeft: 20,
    marginTop: 2
  },
  usernameOrEmailWrapper: {
    backgroundColor: "white",
    width: "98%",
    height: "50%",
    flexDirection: "row",
    alignContent: "flex-start",
    borderBottomWidth: 0.5
  },
  passwordWrapper: {
    backgroundColor: "white",
    width: "98%",
    height: "50%",
    flexDirection: "row",
    alignContent: "flex-start"
  },
  passwordIcon: {
    width: 25,
    height: 25,
    marginLeft: 15,
    marginTop: 10
  },
  passwordInput: {
    width: "65%",
    height: "100%",
    marginLeft: 20
  },
  loginButton: {
    width: "70%",
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#fff",
    marginTop: 50
  },
  loginContainer: {
    backgroundColor: "white",
    width: "70%",
    height: 90,
    borderRadius: 5,
    flexDirection: "column",
    alignContent: "flex-start",
    alignItems: "center"
  }
});

export default styles;
