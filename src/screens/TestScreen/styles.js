import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const numColumns = 3;
// item size
const RECIPE_ITEM_HEIGHT = 40;
const RECIPE_ITEM_OFFSET = 10;
const RECIPE_ITEM_MARGIN = RECIPE_ITEM_OFFSET * 2;

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
  photo: {
    width:
      (SCREEN_WIDTH - RECIPE_ITEM_MARGIN) / numColumns - RECIPE_ITEM_OFFSET,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 60,
  },
  Answers: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Question: {
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  question: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  Questioncontainer: {},
  AnswerContainer: {
    paddingBottom: 20,
  },
  StyleAnswer: {
    marginTop: 7,
    marginBottom: 7,
    minHeight: 59,
    maxHeight: 70,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#BFBFBF',
    borderRadius: 12,
    alignItems: 'center',
  },
  Answer: {
    flex: 85,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    alignItems: 'center',
    flexDirection: 'row',
    textAlign: 'center',
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf: 'center',
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
    minWidth:375,
    maxWidth:375,
    marginLeft: 24,
    marginRight: 24,
    borderWidth: 1,
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
    paddingBottom: 20,
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
});

export default styles;
