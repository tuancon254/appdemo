import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import {
  getIngredientName,
  getCategoryName,
  getCategoryById,
  getLessionName,
} from '../../data/MockDataAPI';
import BackButton from '../../components/BackButton/BackButton';
import ViewIngredientsButton from '../../components/ViewIngredientsButton/ViewIngredientsButton';
import Carousel, { Pagination } from 'react-native-snap-carousel';

class TestInfoView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeSlide: 0,
    };
  }

  renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    </TouchableHighlight>
  );

  onPressIngredient = item => {
    const name = getIngredientName(item);
    let ingredient = item;
    this.props.navigation.navigate('Ingredient', { ingredient, name });
  };

  render() {
    const { activeSlide } = this.state;
    const { navigation } = this.props;
    const item = navigation.getParam('item');
    const category = getCategoryById(item.categoryId);
    const title = getCategoryName(category.id);

    return (
      <View style={styles.container}>

        <View style={styles.Menu}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>


        <View style={styles.carouselContainer}>
          <View style={styles.carousel}>
            <Image style={styles.image} source={{ uri: item.photo_url }} />
          </View>
        </View>


        <View style={styles.infoRecipeContainer}>
          <Text style={styles.infoRecipeName}>{item.title}</Text>

          <View>
            <View>
              <Text style={styles.category}>
                {getLessionName(item.LessionId).toUpperCase()}
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Image
              style={styles.infoPhoto}
              source={require('../../../assets/icons/time.png')}
            />
            <Text style={styles.infoRecipe}>{item.time} minutes </Text>
          </View>

          

          <View>
            <ViewIngredientsButton
              onPress={() => {
                const ingredients = item.ingredients;
                const title = `Ingredients for ${item.title}`;
                navigation.navigate('TestScreen', {
                  ingredients,
                  title,
                });
              }}
            />
          </View>

          <View>
            <Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default TestInfoView;
