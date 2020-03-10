import React, { Component } from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from '../../services/FirebaseConfig';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  onPressRecipe = item => {
    this.navigation.navigate('RecipeScreen', { item });
  };

  onPressGetStarted() {
    this.navigation.navigate('TestListScreens');
  }

  onSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate('Login');
      });
  };

  renderRecipes({ item }) {
    return (
      <View style={styles.wellcome}>
        <TouchableOpacity onPress={() => this.onPressRecipe(item)}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Image style={styles.photo} source={{ uri: item.photo_url }} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <ScrollView style={{ flex: 1 }}>
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
                <Text style={styles.HomeTitle}>
                  What do you want to test Today?
                </Text>
                <TouchableOpacity
                  style={styles.get_started_button}
                  onPress={this.onPressGetStarted}
                >
                  <Text style={styles.get_started_text}>Get Started</Text>
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
                renderItem={this.renderRecipes}
                keyExtractor={item => `${item.recipeId}`}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
