import { RecipeCard } from '../../AppStyles';
import { StyleSheet, Dimensions, Slider } from 'react-native';

const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const TITLE_WIDTH = '70%';
const PHOTO_WIDTH = '18%';

const styles = StyleSheet.create({
  container: RecipeCard.container,
  category: RecipeCard.category,

  wellcome1: {
    flex: 1,
    borderRadius: 5,
    padding: 20,
    paddingLeft: 5,
    margin: 10,
    flexDirection: 'row',
  },

  wellcome: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
    margin: 18,
    marginTop: 10,
    backgroundColor: '#e6f7ff',
  },
  div: {
    flex: 1,
  },
  photo: {
    width: PHOTO_WIDTH,
    borderRadius: 10,
    aspectRatio: 1,
    marginLeft: 5,
  },

  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 10,
    marginRight: 5,
    marginLeft: 6,
  },

  avatar: {
    width: '16%',
    height: 50,
    aspectRatio: 1,
    borderRadius: 5,
  },
  rootContainer: {
    margin: 20,
  },
  backgroundImage: {
    width: '100%',
    height: 200,
  },
  HomeTitle: {
    marginLeft: 30,
    marginTop: 40,
    marginRight: 180,
    fontSize: 22,
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
    fontSize: 17,
    paddingTop: 7,
  },
  feedback: {
    fontSize: 23,
    fontWeight: 'bold',
    padding: 20,
    paddingLeft: 25,
  },
});

export default styles;
