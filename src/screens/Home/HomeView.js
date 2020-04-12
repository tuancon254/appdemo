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
  Alert,
} from 'react-native';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import uuid from 'uuid/v4';
import firebase from '../../services/FirebaseConfig';
import { DrawerActions } from 'react-navigation-drawer';

class HomeView extends Component {
  constructor(props) {
    super(props);
    global.chapterDones = new Array();
    global.chapters = new Array();
    this.state = {
      email: '',
      profiles: '',
    };
  }

  // onPress Chapter
  onPressChapter = (item, index, status) => {
    console.log('status' + status);
    if (index + 1 == 1)
      this.props.navigation.navigate('TestInfo', {
        item: item.CH1,
        name: 'CH1',
        yourClass: this.props.profile.class,
        userName: this.props.profile.name,
        status: status
      });
    else if (index + 1 == 2)
      this.props.navigation.navigate('TestInfo', {
        item: item.CH2,
        name: 'CH2',
        yourClass: this.props.profile.class,
        userName: this.props.profile.name,
        status: status
      });
    else if (index + 1 == 3)
      this.props.navigation.navigate('TestInfo', {
        item: item.CH3,
        name: 'CH3',
        yourClass: this.props.profile.class,
        userName: this.props.profile.name,
        status: status
      });
    else if (index + 1 == 4)
      this.props.navigation.navigate('TestInfo', {
        item: item.CH4,
        name: 'CH4',
        yourClass: this.props.profile.class,
        userName: this.props.profile.name,
        status: status
      });
    else if (index + 1 == 5)
      this.props.navigation.navigate('TestInfo', {
        item: item.CH5,
        name: 'CH5',
        yourClass: this.props.profile.class,
        userName: this.props.profile.name,
        status: status
      });
    else if (index + 1 == 6)
      this.props.navigation.navigate('TestInfo', {
        item: item.CH6,
        name: 'CH6',
        yourClass: this.props.profile.class,
        userName: this.props.profile.name,
        status: status
      });
    else if (index + 1 == 7)
      this.props.navigation.navigate('TestInfo', {
        item: item.CH7,
        name: 'CH7',
        yourClass: this.props.profile.class,
        userName: this.props.profile.name,
        status: status
      });
    else if (index + 1 == 8)
      this.props.navigation.navigate('TestInfo', {
        item: item.CH8,
        name: 'CH8',
        yourClass: this.props.profile.class,
        userName: this.props.profile.name,
        status: status
      });
    else if (index + 1 == 9)
      this.props.navigation.navigate('TestInfo', {
        item: item.CH9,
        name: 'CH9',
        yourClass: this.props.profile.class,
        userName: this.props.profile.name,
        status: status
      });
    else if (index + 1 == 10)
      this.props.navigation.navigate('TestInfo', {
        item: item.CH10,
        name: 'CH10',
        yourClass: this.props.profile.class,
        userName: this.props.profile.name,
        status: status
      });
  };

  // component Chapter
  renderChapter = ({ item, index }) => (
    <View>
      {index === this.chapterDones[0] ||
        index === this.chapterDones[1] ||
        index === this.chapterDones[2] ||
        index === this.chapterDones[3] ||
        index === this.chapterDones[4] ||
        index === this.chapterDones[5] ||
        index === this.chapterDones[6] ||
        index === this.chapterDones[7] ||
        index === this.chapterDones[8] ||
        index === this.chapterDones[9] ? (
          <View></View>
        ) : (
          <View style={styles.wellcome}>
            <TouchableOpacity onPress={() => this.onPressChapter(item, index, '')}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <Image
                    style={styles.iconChapter}
                    source={require('../../../assets/icons/C2.png')}
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
        )}
    </View>
  );

  // component renderChapterDone
  renderChapterDone = ({ item, index }) => (
    <View>
      {index === this.chapterDones[0] ||
        index === this.chapterDones[1] ||
        index === this.chapterDones[2] ||
        index === this.chapterDones[3] ||
        index === this.chapterDones[4] ||
        index === this.chapterDones[5] ||
        index === this.chapterDones[6] ||
        index === this.chapterDones[7] ||
        index === this.chapterDones[8] ||
        index === this.chapterDones[9] ? (
          <View style={styles.wellcomeDone}>
            <TouchableOpacity onPress={() => this.onPressChapter(item, index, 'inActive')}>
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
        ) : (
          <View></View>
        )}
    </View>
  );

  onPressGetStarted = () => {
    return this.props.navigation.navigate('SubjectContainer', { chapters: this.chapters, profile: this.props.profile, chapterDones: chapterDones });
  };

  componentDidMount() {
    const currentUser = firebase.auth().currentUser;
    // console.log(firebase.auth())
  }
  render() {
    const { navigation, chapters, profile, chapterDone } = this.props;
    this.chapterDones = chapterDones;
    this.chapters = chapters;
    console.log(profile)

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
            <TouchableOpacity onPress={() => {
              navigation.openDrawer();
            }}>
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

          {/* view bài kiểm tra gần đây */}
          <View>
            <Text style={styles.feedback}>Bài kiểm tra gần đây</Text>
          </View>
          <View style={styles.div}>
            <FlatList
              showsVerticalScrollIndicator={false}
              numColumns={1}
              data={chapters}
              renderItem={this.renderChapterDone}
              keyExtractor={() => uuid()}
            />
          </View>

          {/* Component các bài kiểm tra sắp tới */}
          <View>
            <Text style={styles.feedback}>Các bài kiểm tra sắp tới</Text>
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
