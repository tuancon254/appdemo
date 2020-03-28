import { StyleSheet, Dimensions } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  carouselContainer: {
    minHeight: 200,
    marginTop:20
  },
  carousel: {
    marginLeft:25,
    marginRight:25
  },

  image: {
    width: '100%',
    height: 200,
    borderRadius: 25,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    width: viewportWidth,
    height: 250
  },

  infoRecipeContainer: {
    margin:20,
    alignItems: 'center',
    borderRadius:30,
    flex:60,
    backgroundColor: 'white',
    padding:20
  },
  
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  infoPhoto: {
    height: 20,
    width: 20,
  },
  infoRecipe: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  category: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2cd18a'
  },
  infoDescriptionRecipe: {
    textAlign: 'left',
    fontSize: 16,
    marginTop: 30,
    margin: 15
  },
  infoRecipeName: {
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  },
  Menu:{
    paddingTop:20,
    justifyContent:'space-between',
    flexDirection:'row',
  },
  iconMenu:{
    width: 34,
    height: 34
  },
  btnContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 24,
  },
  btnIcon: {
    height: 22,
    width: 16,
  },
});

export default styles;
