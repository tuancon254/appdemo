import { RecipeCard } from '../../AppStyles';
import { StyleSheet, Dimensions, Slider } from 'react-native';

const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const TITLE_WIDTH = '70%';
const PHOTO_WIDTH = '20%';

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 120;
const RECIPE_ITEM_MARGIN = 24;

const styles = StyleSheet.create({
  container: RecipeCard.container,
  category: RecipeCard.category,

  header: {
    flex: 1,
    paddingTop: 5,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 24,
    flexDirection: 'row',
  },

  wellcome: {
    width: '41%',
    borderRadius: 15,
    padding: 15,
    marginLeft: RECIPE_ITEM_MARGIN,
    width:
      (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) /
      recipeNumColums,
    height: RECIPE_ITEM_HEIGHT + 75,
    marginTop: 20,
    backgroundColor: "#F2FCF2",
    marginBottom:2,
   


    // shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
  },
  div: {
    flex: 1,
    paddingBottom:160

  },
  photo: {
    width: PHOTO_WIDTH,
    borderRadius: 10,
    aspectRatio: 1,
    marginLeft: 5,
    flex: 1,
  },

  iconChapter: {
    margin: 10,
    width: '28%',
    height: '100%',
  },

  titleChapter: {
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },

  timeChapter: {
    marginLeft: 10,
    color: '#999999',
    fontSize: 12,
  },

  iconMenu: {
    width: 34,
    height: 34,
    aspectRatio: 1,
    borderRadius: 5,
  },
  rootContainer: {
    marginLeft: 24,
    marginRight: 24,
    flex: 1,
  },
  backgroundImage: {
    height: 200,
    flex: 1,
  },
  HomeTitle: {
    marginLeft: 30,
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
  get_started_button: {
    width: '30%',
    height: 40,
    alignItems: 'center',
    backgroundColor: '#ff8000',
    borderRadius: 10,
    marginTop: 15,
    marginLeft: 30,
  },
  get_started_text: {
    color: 'white',
    fontSize: 14,
    paddingTop: 10,
  },
  feedback: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: 24,
    paddingTop: 15,
  },

  Quickview: {
    flex: 20,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 24,
  },
  Menu: {
    paddingTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  iconMenu: {
    width: 34,
    height: 34,
  },
  button: {
    marginRight: 25,
    marginTop: 15,
  },
  icon: {
    width: 35.3,
    height: 36.53,
    marginTop: 10,
    marginRight: 15,
    marginLeft: 10,
  },
});

export default styles;
