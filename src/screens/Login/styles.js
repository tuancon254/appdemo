import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#3b5998',
  },
  logo: {
    width: '30%',
    height: '50%',
    overflow: 'visible',
    shadowColor: '#001',
    shadowOffset: {
      width: 3,
      height: 10,
    },
    shadowOpacity: 0.65,
    shadowRadius: 10,

    elevation: 7,
  },
  
  logoContainer: {
    flex: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mailIcon: {
    width: 20,
    height: 22,
  },
  mailIconWrapper: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(187, 197, 250, 0.2)',
  },
  usernameOrEmailWrapper: {
    flexDirection: 'row',
    paddingBottom: 23,
  },
  textInput: {
    borderBottomWidth: 1,
    flex: 1,
    marginLeft: 15,
    borderColor: 'rgba(173, 173, 173, 0.6)',
  },

  passwordIcon: {
    width: 20,
    height: 20,
  },
  passwordInput: {
    fontSize: 17,
    color: '#586BCA',
    marginTop: 3,
    flex: 1,
  },
  loginButton: {
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    borderRadius: 11,
    backgroundColor: '#FF7F2D',
  },
  loginContainer: {
    flex: 60,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingLeft: 39,
    paddingRight: 39,
  },

  loadingIcon: {
    position: 'absolute',
    right: 16,
  },
  hello: {
    marginTop: 30,
    marginBottom: 23,
  },
  helloText: {
    fontSize: 30,
    fontWeight: '500',
  },
  visibleIcon: {
    width: 24,
    height: 20,
    marginRight: 4,
    marginTop: 8,
  },
});

export default styles;
