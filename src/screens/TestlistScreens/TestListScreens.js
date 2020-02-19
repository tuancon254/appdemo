import React from 'react';
import { FlatList, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import { recipes } from '../../data/dataArrays';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  onPressRecipe = item => {
    this.props.navigation.navigate('RecipeScreen', { item });
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight onPress={() => this.onPressRecipe(item)}>
      <View style={styles.container}>
        {/* <View style={styles.rootContainer}> */}
          <Image style={styles.photo} source={require('../../../assets/1.png')} />
        {/* </View> */}
        <View style={{width:"70%",flex:1}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={{marginRight:100,margin:20,flex:1,fontSize:14,fontWeight:"bold"}}>{item.time} Minutes</Text>
        </View>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View >
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={1}
          data={recipes}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
  }
}
