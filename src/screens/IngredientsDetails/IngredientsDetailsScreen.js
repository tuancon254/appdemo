import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './styles';
import { getIngredientName, getAllIngredients } from '../../data/MockDataAPI';
import { recipes } from '../../data/dataArrays';
import { CheckBox } from 'react-native-elements';
import { Answers, Question } from '../../data/dataArrays';

export default class IngredientsDetailsScreen extends React.Component {
  // static navigationOptions = ({ navigation, route }) => {
  //   return {
  //     title: route.params.title,
  //     headerTitleStyle: {
  //       fontSize: 16
  //     }
  //   };
  // };

  constructor(props) {
    console.log(props);

    super(props);
    this.state = {
      checkedId: null,
    };
  }

  onPressIngredient = item => {
    let name = getIngredientName(item.ingredientId);
    let ingredient = item.ingredientId;
    this.props.navigation.navigate('Ingredient', { ingredient, name });
  };
  onCheck = a => {
    if (this.state.checked === false) this.setState({ checked: true });
  };

  questionItem = (question, index) => {
    return (
      <View style={styles.Answers} key={index}>
        <CheckBox
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.state.checkedId === index + 1}
          title={question.question}
          onPress={() => this.setState({ checkedId: question.id })}
          containerStyle={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  };

  renderIngredient = ({ item, index }) => {
    return (
      <View key={index}>
        <View style={styles.container}>
          <View style={styles.Question}>
            <Text>{item.title}</Text>
          </View>

          {item.questions.map((question, index) => {
            return this.questionItem(question, index);
          })}
        </View>
      </View>
    );
  };

  render() {
    return (
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Answers}
          renderItem={this.renderIngredient}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
  }
}
