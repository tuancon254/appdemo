import { StyleSheet, Dimensions } from 'react-native';
import { Question } from '../../data/dataArrays';

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
    alignItems: 'flex-start',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    borderWidth:1,
    borderRadius:10
  },
  title: {
    margin: 10,
    marginBottom: 5,
    color: 'black',
    fontSize: 13,
    fontFamily: 'normal',
    textAlign: 'center'
  },
  photo: {
    width: (SCREEN_WIDTH - RECIPE_ITEM_MARGIN) / numColumns - RECIPE_ITEM_OFFSET,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 60
  },
  Answers:{
    flex:1,
    flexDirection:'row',
  
    alignItems:'center'
  },
  Question:{
    alignItems: 'center',
    flex:1,
    width:'100%',
    paddingTop: 20,
    backgroundColor: 'silver',
    paddingBottom: 20,
    borderTopRightRadius:10,
    borderTopLeftRadius: 10
  }

});

export default styles;
