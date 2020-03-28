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
import { ScrollView } from 'react-native-gesture-handler';
import uuid from 'uuid/v4';
import firebase from '../../services/FirebaseConfig';

class HomeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };
  }

  // onPress Chapter
  onPressChapter = (item, index) => {
    console.log(index);
    if (index + 1 == 1)
      this.props.navigation.navigate('TestInfo', { item: item.CH1 });
    else if (index + 1 == 2)
      this.props.navigation.navigate('TestInfo', { item: item.CH2 });
    else if (index + 1 == 3)
      this.props.navigation.navigate('TestInfo', { item: item.CH3 });
    else if (index + 1 == 4)
      this.props.navigation.navigate('TestInfo', { item: item.CH4 });
    else if (index + 1 == 5)
      this.props.navigation.navigate('TestInfo', { item: item.CH5 });
    else if (index + 1 == 6)
      this.props.navigation.navigate('TestInfo', { item: item.CH6 });
    else if (index + 1 == 7)
      this.props.navigation.navigate('TestInfo', { item: item.CH7 });
    else if (index + 1 == 8)
      this.props.navigation.navigate('TestInfo', { item: item.CH8 });
    else if (index + 1 == 9)
      this.props.navigation.navigate('TestInfo', { item: item.CH9 });
    else if (index + 1 == 10)
      this.props.navigation.navigate('TestInfo', { item: item.CH10 });
  };

  // component Chapter not Recipes - chương...CHƯƠNG...CHƯƠNGGGGGGGGG
  renderChapter = ({ item, index }) => (
    <View style={styles.wellcome}>
      <TouchableOpacity onPress={() => this.onPressChapter(item, index)}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Image
              style={styles.iconChapter}
              source={require('../../../assets/icons/C1.png')}
            />
          </View>
          <View style={{ flex: 3, flexDirection: 'row' }}>
            <View style={{ flex: 1.5, flexDirection: 'column' }}>
              <Text style={styles.titleChapter}>Chương {index + 1}</Text>
              <Text style={styles.timeChapter}>10 phút</Text>
            </View>
            <Image
              style={styles.iconChapter}
              source={require('../../../assets/icons/pass.png')}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  onPressGetStarted = () => {
    return this.props.navigation.navigate('SubjectContainer');
  };

  componentDidMount() {
    const currentUser = firebase.auth().currentUser;
    console.log(firebase.auth())
  }
  
  render() {
    const { navigation, chapters, profile } = this.props;
    
    return (
      <View style={{ backgroundColor: 'white' }}>
        <ScrollView>
          {/* Header view */}
          <View style={styles.header}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16, color: '#000' }}>Hello,</Text>
              <Text style={{ fontSize: 27, fontWeight: 'bold' }}>
                {profile?.name}
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.openDrawer({})}>
              <Image
                source={require('../../../assets/icons/menu.png')}
                style={styles.iconMenu}
              />
            </TouchableOpacity>
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
              <TouchableOpacity>
                <Image
                  source={require('../../../assets/icons/search.png')}
                  style={styles.iconSearch}
                />
              </TouchableOpacity>
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
              <Text
                style={{ marginLeft: 30, fontSize: 20, fontWeight: 'bold' }}
              >
                hôm nay?
              </Text>
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
              showsVerticalScrollIndicator={false}
              numColumns={1}
              data={chapters}
              renderItem={this.renderChapter}
              keyExtractor={() => uuid()}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default HomeView;
