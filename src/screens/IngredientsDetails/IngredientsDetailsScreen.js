import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight,
  SectionList
} from 'react-native';
import styles from './styles';
import {
  getIngredientName,
  getAllIngredients,
} from '../../data/MockDataAPI';
import { recipes } from '../../data/dataArrays'
import { CheckBox } from 'react-native-elements';
import { Answers, Question } from '../../data/dataArrays'
export default class IngredientsDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
      headerTitleStyle: {
        fontSize: 16
      }
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
  }



  onPressIngredient = item => {
    let name = getIngredientName(item.ingredientId);
    let ingredient = item.ingredientId;
    this.props.navigation.navigate('Ingredient', { ingredient, name });
  };
  onCheck = (a) => {
    if (this.state.checked == false) this.setState({ checked: true })
  }

  renderIngredient = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' >
      <View style={styles.container}>
        <View style={styles.Question}><Text>Question</Text></View>
        <View style={styles.Answers}><CheckBox

          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={false}
        /><Text>Awnsers 1</Text></View>
        <View style={styles.Answers}><CheckBox
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={false}
        /><Text>Answers 2</Text></View>
        <View style={styles.Answers}><CheckBox
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={false}
        /><Text>Answers 3</Text></View>

        <View style={styles.Answers}><CheckBox
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={false}
        /><Text>Answers 4</Text></View>


      </View>
    </TouchableHighlight>
  );



  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('ingredients');
    const ingredientsArray = getAllIngredients(item);

    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={1}
          data={ingredientsArray}
          renderItem={this.renderIngredient}
          keyExtractor={item => `${item.recipeId}`}

        />
      </View>
    );
  }
}
