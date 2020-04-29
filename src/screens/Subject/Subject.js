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
import MenuImage from '../../components/MenuImage/MenuImage';
import { ScrollView } from 'react-native-gesture-handler';
import SearchScreen from './../Search/SearchScreen';
import BackButton from '../../components/BackButton/BackButton';

class Subject extends Component {
  constructor(props) {
    global.chapterDones = new Array();
    super(props);
  }

  onPressChapter = ( item, index, status ) => {
    console.log("DDDDĐD = "+this.chapterDones[index]);
    if(this.chapterDones[index] != undefined){
      console.log("vào")
        status = this.chapterDones[index].slice(2, 3) + status
    }
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

  renderChapter = ({ item, index }) => (
    <View style={styles.wellcome}>
      {index == String(this.chapterDones[0]).slice(0, 1) ||
      index == String(this.chapterDones[1]).slice(0, 1) ||
      index == String(this.chapterDones[2]).slice(0, 1) ||
      index == String(this.chapterDones[3]).slice(0, 1) ||
      index == String(this.chapterDones[4]).slice(0, 1) ||
      index == String(this.chapterDones[5]).slice(0, 1) ||
      index == String(this.chapterDones[6]).slice(0, 1) ||
      index == String(this.chapterDones[7]).slice(0, 1) ||
      index == String(this.chapterDones[8]).slice(0, 1) ||
      index == String(this.chapterDones[9]).slice(0, 1) ? 
      <View style={{ flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <Image
            style={styles.iconChapter}
            //source={{ uri: item.photo_url }}
            source={require('../../../assets/icons/iconBook.png')}
          />
          <Text style={{ paddingTop: 15, color: '#16A831' }}>Giới thiệu</Text>
        </View>
        <View>
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.titleChapter}>Chương {index + 1}</Text>
            <Text style={styles.timeChapter}>20 phút</Text>
          </View>
          <TouchableOpacity onPress={() => this.onPressChapter(item, index, 'inActive')}>
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
              <Image
                style={styles.iconChapter}
                source={require('../../../assets/icons/play-button.png')}
              />
              <Text style={{ paddingTop: 15, color: '#FF7F2D', fontSize: 17 }}>
                Làm bài
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      :
      <View style={{ flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <Image
            style={styles.iconChapter}
            //source={{ uri: item.photo_url }}
            source={require('../../../assets/icons/iconBook.png')}
          />
          <Text style={{ paddingTop: 15, color: '#16A831' }}>Giới thiệu</Text>
        </View>
        <View>
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.titleChapter}>Chương {index + 1}</Text>
            <Text style={styles.timeChapter}>20 phút</Text>
          </View>
          <TouchableOpacity onPress={() => this.onPressChapter(item, index, 'active')}>
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
              <Image
                style={styles.iconChapter}
                source={require('../../../assets/icons/play-button.png')}
              />
              <Text style={{ paddingTop: 15, color: '#FF7F2D', fontSize: 17 }}>
                Làm bài
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      }
    </View>
  );

  render() {
    const { navigation, chapters, chapterDones} = this.props;
    const data = chapters;
    this.chapterDones = chapterDones;
    return (
      <View style={{ backgroundColor: 'white' }}>
        <View style={styles.Menu}>
          <BackButton onPress={() => navigation.goBack()} />
          <View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.openDrawer()}>
              <Image
                source={require('../../../assets/icons/menu.png')}
                style={styles.iconMenu}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <ScrollView>
            {/* Header view */}
            <View style={styles.header}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
                  Bộ môn: Tin học ứng dụng
                </Text>
                <Text style={{ fontSize: 12, color: '#999' }}>
                  Giảng viên: Dân Quốc Cương
                </Text>
              </View>
            </View>

            {/* Get Started view */}
            <View style={styles.rootContainer}>
              <ImageBackground
                source={require('../../../assets/backgrHome.jpg')}
                style={styles.backgroundImage}
                imageStyle={{ borderRadius: 15 }}
              />
            </View>

            {/* Quickview */}
            <View style={styles.Quickview}>
              <Text style={{}}>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                  Tin học ứng dụng{' '}
                </Text>
                Bộ môn tin học ứng dụng bla bla bla abcxyz...
              </Text>
            </View>

            <View>
              <Text style={styles.feedback}>Kiểm tra</Text>
            </View>
            
            <View style={{paddingBottom:160}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              numColumns={2}
              data={data}
              renderItem={this.renderChapter}
              keyExtractor={item => `${item}`}
            />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Subject;
