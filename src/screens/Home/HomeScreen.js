import React, { Component } from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  BackHandler,
  ToastAndroid,
} from 'react-native';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import { ScrollView } from 'react-native-gesture-handler';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  onPressGetStarted() {
    this.props.navigation.navigate('TestListScreens');
  }

  onPressRecipe = (item, navigation) => {
    navigation.navigate('RecipeScreen', { item });
  };

  renderRecipes(item, navigation) {
    return (
      <TouchableOpacity
        style={styles.welcome}
        onPress={() => this.onPressRecipe(item, navigation)}
      >
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Image style={styles.photo} source={{ uri: item.photo_url }} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  // handleBackButton() {
  //   return true;
  // }
  //
  // componentDidMount() {
  //   BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  // }
  //
  // componentWillUnmount() {
  //   BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  // }

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#FFF' }}>
        <View style={styles.wellcome1}>
          <View style={{ flex: 1, paddingLeft: 5 }}>
            <Text style={{ fontSize: 20, color: '#666666' }}>Hello</Text>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
              Tran Dinh Giang
            </Text>
          </View>
          <TouchableOpacity
            style={styles.headerButtonContainer}
            onPress={navigation.openDrawer}
          >
            <Image
              style={styles.headerButtonImage}
              source={require('../../../assets/icons/menu.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.rootContainer}>
          <ImageBackground
            source={require('../../../assets/backgr.jpg')}
            style={styles.backgroundImage}
            imageStyle={{ borderRadius: 10 }}
          >
            <Text style={styles.HomeTitle}>Bạn muốn kiểm tra hôm nay ?</Text>
            <TouchableOpacity
              style={styles.get_started_button}
              onPress={() => this.onPressGetStarted()}
            >
              <Text style={styles.get_started_text}>Bắt đầu</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View>
          <Text style={styles.feedback}>Bài kiểm tra gần đây</Text>
        </View>

        <View style={styles.div}>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={1}
            data={recipes}
            renderItem={({ item }) => this.renderRecipes(item, navigation)}
            keyExtractor={item => `${item.recipeId}`}
          />
        </View>
      </ScrollView>
    );
  }
}

export default HomeScreen;
