import React, { Component } from 'react';
import { FlatList, Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerLeft: <MenuImage onPress={navigation.openDrawer} />,
  });

  constructor(props) {
    super(props);
  }

  onPressRecipe = item => {
    this.props.navigation.navigate('RecipeScreen', { item });
  };

  renderRecipes = ({ item }) => (
    <TouchableOpacity onPress={() => this.onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View>
        <View style={styles.wellcome}>
          <Text>ABC</Text>
        </View>
        <View>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={recipes}
            renderItem={this.renderRecipes}
            keyExtractor={item => `${item.recipeId}`}
          />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
