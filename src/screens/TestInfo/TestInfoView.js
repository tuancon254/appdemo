import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import styles from './styles';
import {
  getIngredientName,
  getCategoryName,
  getCategoryById,
  getLessionName,
} from '../../data/MockDataAPI';
import BackButton from '../../components/BackButton/BackButton';
import ViewIngredientsButton from '../../components/ViewIngredientsButton/ViewIngredientsButton';

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

  // trộn câu hỏi với thuật toán Fisher–Yates shuffle
  shuffle(array) {
    var newArray = new Array(10);
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    for (let i = newArray.length - 1; i >= 0; i--) {
      newArray[i] = array[i];
    }
    return newArray;
  }

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item');

    console.log(item);

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
                {/*{getLessionName(item.LessionId).toUpperCase()}*/}
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={styles.infoPhoto}
              source={require('../../../assets/icons/time.png')}
            />
            <Text style={styles.infoRecipe}>10 phút </Text>
          </View>

          <View>
            <ViewIngredientsButton
              onPress={() => {
                const questions = this.shuffle(item.questions);
                navigation.navigate('TestScreen', {
                  question : questions,
                  title : item.title,
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
