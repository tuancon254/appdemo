import { StyleSheet, Dimensions } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth:1,
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
    fontSize: 28,
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
  button:{
    marginRight:25,
    marginTop:15
  },

  // style component start test
  containerS: {
    height: 50,
    width: 200,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 100,
    borderColor: '#2cd18a',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  textS: {
    fontSize: 16,
    color: '#2cd18a'
  },

  containerS2: {
    height: 120,
    width: '80%',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
