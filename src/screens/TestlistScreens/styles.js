import { StyleSheet,Dimensions } from 'react-native';
import { RecipeCard } from '../../AppStyles';

const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 20;

const styles = StyleSheet.create({
  container:{
    backgroundColor:"white",
    margin:20,
    marginTop:11,
    marginBottom:7,
    flexDirection:"row",
    
  },
  rootContainer:{
  backgroundColor:"silver",
  margin:20,
  },
  photo: {
    width: "20%",
    aspectRatio:1,
    margin:20,
    backgroundColor:"silver",
    borderRadius:10
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginRight: 5,
    marginLeft: 20,
  },
});

export default styles;
