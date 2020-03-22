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
    super(props);
  }

  onPressChapter = item => {
    this.props.navigation.navigate('TestInfo', { item });
  };

  renderChapter = ({ item, index }) => (
    <View style={styles.wellcome}>

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
          <TouchableOpacity onPress={() => this.onPressChapter(item)}>
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
              <Image
                style={styles.iconChapter}
                //source={{ uri: item.photo_url }}
                source={require('../../../assets/icons/play-button.png')}
              />
              <Text style={{ paddingTop: 15, color: '#FF7F2D', fontSize: 17 }}>
                Làm bài
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  render() {
    const { navigation, value } = this.props;

    const data = value.Chapters;

    return (
      <View style={{ backgroundColor: 'white' }}>
        <View style={styles.Menu}>
          <BackButton onPress={() => navigation.goBack()} />
          <View>
            <TouchableOpacity style={styles.button}>
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
                  Giảng viên: Tin học ứng dụng
                </Text>
              </View>
            </View>

            {/* Get Started view */}
            <View style={styles.rootContainer}>
              <ImageBackground
                source={require('../../../assets/backgrHome1.png')}
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

            <FlatList
              showsVerticalScrollIndicator={false}
              numColumns={2}
              data={data}
              renderItem={this.renderChapter}
              keyExtractor={item => `${item}`}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Subject;
