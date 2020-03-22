import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#3b5998',
  },
  logo: {
    width: 128,
    height: 118,
  },
  mailIcon: {
    width: 20,
    height: 22,
  },
  usernameOrEmail: {
    width: '100%',
    height: '100%',
    marginLeft: 15,
    borderWidth:1,
    fontSize:17
  },
  usernameOrEmailWrapper: {
    backgroundColor: 'white',
    width: '98%',
    height: '50%',
    flexDirection: 'row',
    alignContent: 'flex-start',
    borderBottomWidth: 0.5,
  },
  passwordWrapper: {
    backgroundColor: 'white',
    width: '98%',
    height: '50%',
    flexDirection: 'row',
    alignContent: 'flex-start',
  },
  passwordIcon: {
    width: 20,
    height: 20,
  },
  passwordInput: {
    fontSize: 17, 
    color: "#586BCA",
    marginTop:3
  },
  loginButton: {
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    borderRadius: 11,
    backgroundColor: '#FF7F2D',
  },
  loginContainer: {
    backgroundColor: 'white',
    width: '70%',
    height: 90,
    borderRadius: 5,
    flexDirection: 'column',
    alignContent: 'flex-start',
    alignItems: 'center',
  },
  loadingIcon: {
    position: 'absolute',
    right: 16,
  },
});

export default styles;
