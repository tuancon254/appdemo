import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';
import {
  getIngredientName,
  getCategoryName,
  getCategoryById,
  getLessionName,
} from '../../data/MockDataAPI';
import BackButton from '../../components/BackButton/BackButton';
// import {
//   TouchableOpacity,
// } from 'react-native-gesture-handler';

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
    const chapterName = navigation.getParam('name');
    const yourClass = navigation.getParam('yourClass');
    const userName = navigation.getParam('userName');
    const status = navigation.getParam('status');
    return (
      <View style={styles.container}>
        <View style={{ flex: 40 }}>
          <ImageBackground source={require('../../../assets/images/backgro.png')} style={{ width: "100%", flex: 1 }} imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
            <View style={styles.Menu}>
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                style={styles.btnContainer}>
                <Image
                  source={require('../../../assets/icons/White1.png')}
                  style={styles.btnIcon}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground></View>
        <View style={styles.infoRecipeContainer}>

          <Text style={styles.infoRecipeName}>{item.title}</Text>


          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={styles.infoPhoto}
              source={require('../../../assets/icons/time.png')}
            />
            <Text style={styles.infoRecipe}>10 phút </Text>
          </View>

          <View>
            {item.status === 1 ?
              <View style={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    style={styles.infoPhoto}
                    source={require('../../../assets/icons/time.png')}
                  />
                  <Text style={styles.infoRecipe}>10 phút</Text>
                </View>
                <TouchableOpacity onPress={() => {
                  const questions = this.shuffle(item.questions);
                  this.props.navigation.navigate('TestScreen', {
                    question: questions,
                    chapterName: chapterName,
                    yourClass: yourClass,
                    userName: userName
                  });
                }}>
                  <View style={styles.containerS}>
                    <Text style={styles.textS}>Làm bài</Text>
                  </View>
                </TouchableOpacity>
              </View>
              : status === 'inActive' ?
                <View style={styles.containerS2}>
                  <Image
                    style={{ height: 130, width: 130, }}
                    source={require('../../../assets/icons/iconManLock2.png')}
                  />
                  <Text style={styles.textS}>Bạn đã làm đủ số lần quy định, vui lòng liên hệ với giáo viên bộ môn để được hỗ trợ!</Text>
                </View>
                :
                <View style={styles.containerS2}>
                  <Image
                    style={{ height: 130, width: 130, }}
                    source={require('../../../assets/icons/iconManLock1.png')}
                  />
                  <Text style={styles.textS}>Chưa kích hoạt</Text>
                </View>
            }

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
