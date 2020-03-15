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
    backgroundColor:'white',
    borderWidth:1
  },
  title: {
    margin: 10,
    marginBottom: 5,
    color: 'black',
    fontSize: 13,
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
  },
  StyleAnswer:{
    flexDirection:"row",
    marginTop:7,
    marginBottom:7,
    minHeight:59,
    maxHeight:70,
    shadowColor:"red",
    shadowOffset:{
      width:4,
      height:4
    },
    shadowOpacity:20
  },
  ABCD:{
    backgroundColor:"#5776D8",
    flex:15,
    borderTopLeftRadius:12,
    borderBottomLeftRadius:12,
    fontSize:24,
    fontWeight:'bold',
    flexDirection:'row',
    alignItems:'center',  
    paddingLeft:20,
  },
  Answer:{  
    backgroundColor:"#7991E0",
    flex:85,
    paddingLeft:20,
    paddingTop:10,
    paddingBottom:10,
    borderTopRightRadius:12,
    borderBottomRightRadius:12,
    paddingRight:10,
    alignItems:'center', 
    flexDirection:'row',
  },
  text:{
    fontSize:17,
    fontWeight:'bold',
  },
  text1:{
    fontSize:24,
    fontWeight:'bold',
    textTransform:'uppercase',
    color:'#FFF',
    alignSelf:'center',
    paddingLeft:5
  },
  AnswerContainer:{
    flex:50,
    marginLeft:28,
    marginRight:28,
    borderWidth:1
  },
  Menu:{
    paddingTop:20,
    justifyContent:'space-between',
    flexDirection:'row',
    borderWidth:1
  },
  iconMenu:{
    width: 34,
    height: 34,
  },
  button:{
    marginRight:25,
    marginTop:15,
    borderWidth:1
  },

});

export default styles;
