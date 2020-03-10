import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  avatar: {
    alignSelf: 'center',
    position: 'absolute',
    width: 86,
    height: 86,
  },
  profile: {
   margin: 32,
  },
  profile1: {
    alignItems: 'center',
    marginTop: 45,
    paddingTop: 45,
    backgroundColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
    height: 127,
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
  },
  addContainer: {
    flex: 50,
    alignSelf: 'center',
  },
  add: {
    alignSelf: 'center',
    fontSize: 12,
  },
  addShow: {
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 2,
    marginBottom: 10,
    color: '#196912',
  },
  decor: {
    backgroundColor: '#999999',
    alignSelf: 'center',
    width: 1,
    height: 22,
  },
});

export default styles;
