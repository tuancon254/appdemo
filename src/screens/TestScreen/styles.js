import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const numColumns = 2;
// item size
const RECIPE_ITEM_MARGIN = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C46',
  },
  timeCowndown: {
    marginTop: 35,
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'center',
  },
  timeout: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    paddingLeft: 15,
    paddingRight: 15,
  },
  title: {
    margin: 10,
    marginBottom: 5,
    color: 'black',
    fontSize: 13,
    textAlign: 'center',
  },
  Answers: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Question: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  question: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign:'center',
  },
  Questioncontainer: {
    flex: 1
  },
  AnswerContainer: {
  },
  imgContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  StyleAnswer: {
    marginTop: 7,
    marginBottom: 7,
    minHeight: 59,
    maxHeight: 95,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#BFBFBF',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent:'center',
  },
  StyleImgAnswer:{
    marginTop: 15,
    marginBottom: 7,
    width:(SCREEN_WIDTH - (numColumns + 3) * RECIPE_ITEM_MARGIN) / numColumns,
    paddingTop:5,
    paddingBottom:5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#BFBFBF',
    borderRadius: 12,
    alignItems: 'center',
    minHeight: 120,
  },
  Answer: {
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  text1: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#FFF',
    alignSelf: 'center',
    paddingLeft: 5,
  },

  MainContainer: {
    flex: 1,
    marginLeft: 24,
    marginRight: 24,
    borderRadius: 28,
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  Menu: {
    paddingTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 12,
  },
  iconMenu: {
    width: 34,
    height: 34,
  },
  button: {
    marginRight: 25,
    marginTop: 15,
    backgroundColor: '#FF7F2D',
    maxHeight: 34,
    minHeight: 25,
    height: 34,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnContainer: {
    alignItems: 'center',
    backgroundColor: '#2C2C46',
    marginTop: 20,
    marginLeft: 24,
  },
  btnIcon: {
    height: 22,
    width: 16,
    backgroundColor: '#2C2C46',
  },
  Main: {
    flex: 1,
    width: width
  },
  q1: {},
  score: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 12,
    alignItems: 'center',
    maxWidth: 80,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  numberContainer: {
    margin: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 0
  },
  number: {
    width: 32,
    height: 32,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 8,
    borderStyle: 'solid',
    alignItems: 'center',
    marginRight: 7,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  numberT: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
  active: {
    width: 30,
    height: 30,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 8,
    borderStyle: 'solid',
    alignItems: 'center',
    marginRight: 7,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  numberActive: {
    fontSize: 22,
    color: 'black',
    textAlign: 'center',
  },
  pagination: {
    flex: 7,

  },
  flatlist: {
    flex: 95,
  },
  textStyle: {
    borderWidth: 1,
    aspectRatio: 1,
    borderColor: 'white',
    color: 'white',
    borderRadius: 8,
    marginTop: 1
  },
  textStyleActive: {
    borderWidth: 1,
    aspectRatio: 1,
    borderColor: 'white',
    color: 'black',
    borderRadius: 8,
    marginTop: 1,
    backgroundColor:'white',
  }
});

export default styles;
