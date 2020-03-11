/**
 * @CreateBy: hieudm
 * @CreateDate: 02/22/2020
 * @LastModifiedBy:
 * @LastModifiedDate:
 */
import React, { Component } from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import { ScrollView } from 'react-native-gesture-handler';
import SearchScreen from './../Search/SearchScreen';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

 // onPress Chapter not Recipes
  onPressChapter = item => {
    this.props.navigation.navigate('RecipeScreen', { item });
  };

  // component Chapter not Recipes - chương...CHƯƠNG...CHƯƠNGGGGGGGGG
  renderChapter = ({ item }) => (
    <View style={styles.wellcome}>
      <TouchableOpacity onPress={() => this.onPressChapter(item)}>
      <View style={{flex: 1,flexDirection: 'row' }}>
        <View style={{ flex: 1}}>
          <Image style={styles.iconChapter} 
            //source={{ uri: item.photo_url }}
            source={require('../../../assets/icons/C1.png')}
          />
        </View>
        <View style={{ flex: 3, flexDirection: 'row'}}>
            <View style={{ flex: 1.5, flexDirection: 'column' }}>
                <Text style={styles.titleChapter}>{item.title}</Text>
                <Text style={styles.timeChapter}>{item.title}</Text>
            </View>
            <Image style={styles.iconChapter} 
                //source={{ uri: item.photo_url }}
                source={require('../../../assets/icons/pass.png')}
            />
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );

  onPressGetStarted = () => {
    return this.props.navigation.navigate('Môn học');
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ backgroundColor: 'white' }}>
        <View>
          <ScrollView>
            {/* Header view */}
            <View style={styles.header}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, color: '#000' }}>Hello,</Text>
                <Text style={{ fontSize: 27, fontWeight: 'bold' }}>
                  Trần Thị Hồng Ngọc
                </Text>
              </View>
              <Image
                source={require('../../../assets/icons/iconMenu.png')}
                style={styles.iconMenu}
              />
            </View>

            {/* Search view */}
            <View style={styles.sectionStyle}>
              <View
                style={{
                  flex: 1,
                  borderRightWidth: 1,
                  borderColor: '#AFB4B4',
                  marginRight: 10,
                }}
              >
                <Image
                  source={require('../../../assets/icons/search.png')}
                  style={styles.iconSearch}
                />
              </View>
              <View style={{ flex: 4.5 }}>
                <TextInput
                  placeholder="Search"
                  underlineColorAndroid="transparent"
                />
              </View>
            </View>

            {/* Get Started view */}
            <View style={styles.rootContainer}>
              <ImageBackground
                source={require('../../../assets/backgrHome1.png')}
                style={styles.backgroundImage}
                imageStyle={{ borderRadius: 15 }}
              >
                <Text style={styles.HomeTitle}>Bạn muốn làm</Text>
                <Text
                  style={{ marginLeft: 30, fontSize: 20, fontWeight: 'bold' }}
                >
                  bài kiểm tra nào
                </Text>
                <Text style={{ marginLeft: 30, fontSize: 20, fontWeight: 'bold' }}>hôm nay?</Text>
                <TouchableOpacity
                  style={styles.get_started_button}
                  onPress={this.onPressGetStarted}
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
                renderItem={this.renderChapter}
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
