import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  btnClickContain: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom:20,
    // marginTop: 5,
    // marginBottom: 5,
    paddingLeft:10
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',

  },
  btnIcon: {
    height: 25,
    width: 25
  },
  btnText: {
    fontSize: 15,
    marginLeft: 10,
    marginTop: 3
  }
});

export default styles;
