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
  header: {
    flex: 1,
    paddingTop: 34,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 24,
    flexDirection: 'row',
  },
  wellcome: {
    flex: 1,
    borderRadius: 15,
    padding: 15,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 20,
    backgroundColor: '#F2FCF2',
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
  wellcome1: {
    flex: 1,
    borderRadius: 5,
    padding: 20,
    paddingLeft: 5,
    margin: 10,
    flexDirection: 'row',
  },
  welcome: {
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
    flex: 1,
  },
  iconChapter: {
    marginLeft: 5,
    width: 60,
    height: 60,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  titleChapter: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  timeChapter: {
    color: '#999999',
    fontSize: 12,
  },
  iconMenu: {
    width: 34,
    height: 34,
  },
  avatar: {
    width: '16%',
    height: 50,
    aspectRatio: 1,
    borderRadius: 5,
  },
  rootContainer: {
    margin: 24,
    flex: 1,
  },
  HomeTitle: {
    marginLeft: 30,
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
  },
  backgroundImage: {
    width: '100%',
    height: 200,
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
  iconSearch: {
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F9',
    height: 54,
    borderRadius: 10,
    marginLeft: 24,
    marginRight: 24,
  },
  feedback: {
    fontSize: 23,
    fontWeight: 'bold',
    padding: 20,
    paddingLeft: 25,
  },
});

export default styles;
