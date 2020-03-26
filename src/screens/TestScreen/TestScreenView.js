import React from 'react';
import { FlatList, Text, View, Image,Alert,BackHandler} from 'react-native';
import styles from './styles';
import { getIngredientName, getAllIngredients } from '../../data/MockDataAPI';
import { recipes } from '../../data/dataArrays';
import { CheckBox } from 'react-native-elements';
import { Answers, Question } from '../../data/dataArrays';
import {
  TouchableOpacity,
} from 'react-native-gesture-handler';
import BackButton from '../../components/BackButton/BackButton';
import Pagination, { Icon, Dot } from 'react-native-pagination';

class TestScreenView extends React.Component {
  static navigationOptions = {
    header: null,
    gestureEnabled:false
  };

  constructor(props) {
    super(props);

    this.state = {
      items: this.props.questions,
      textStyle: styles.textStyle,
      ImgContainer: null
    };
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    this.backHandler.remove()
  }

  handleBackPress = () => {
    Alert.alert(
      'Thoát',
      'Bạn chưa hoàn thành bài kiểm tra, có muốn thoát?',
      [
        {
          text: 'Không',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Có', onPress: () => this.props.navigation.goBack()},
      ],
      {cancelable: false},
    );
    return true;
  }

  _keyExtractor = (item, index) => item.ID;

  onViewableItemsChanged = ({ viewableItems, changed }) => {
    this.setState({ viewableItems })
  }
  _renderItem = ({ item }) => {
    return (
      <View style={styles.Main}>
        <View style={styles.MainContainer}>
          <View style={styles.Questioncontainer}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginBottom: 10,
              }}
            >
              <View style={styles.q1}>
                <Text style={{ fontWeight: 'bold', fontSize: 22 }}>{item.index + 1}.</Text>
              </View>
              <View style={styles.score}>
                <Text
                  style={{ color: '#FF7F2D', marginLeft: 8, marginRight: 8 }}
                >
                  1 Điểm
                  </Text>
              </View>
            </View>
            <View style={{justifyContent:'center',flex:1}}>
              <View style={styles.Question}>
                <Text style={styles.question}>
                  {item.question}
                </Text>
                {item.status === 1 ? <Image
                  source={{ uri: item.link }}
                  style={{ width: 90, height: 90 }}
                /> : null
                }

              </View>
            </View>
          </View>

          <View style={styles.AnswerContainer}>
            <View style={item.status === 2 ? styles.imgContainer : this.state.ImgContainer}>
              <TouchableOpacity key={'A'} style={item.status === 2 ? styles.StyleImgAnswer : styles.StyleAnswer}>
                <View style={styles.Answer}>

                  {item.status === 2 ?
                    <Image
                      source={{ uri: item.A }}
                      style={{ width: 90, height: 90 }}
                    /> : <Text style={styles.text}>{item.A}</Text>
                  }

                </View>
              </TouchableOpacity>
              <TouchableOpacity key={'B'} style={item.status === 2 ? styles.StyleImgAnswer : styles.StyleAnswer}>
                <View style={styles.Answer}>
                  {item.status === 2 ?
                    <Image
                      source={{ uri: item.B }}
                      style={{ width: 90, height: 90 }}
                    /> : <Text style={styles.text}>{item.B}</Text>
                  }
                </View>
              </TouchableOpacity>
            </View>
            <View style={item.status === 2 ? styles.imgContainer : this.state.ImgContainer}>
              <TouchableOpacity key={'C'} style={item.status === 2 ? styles.StyleImgAnswer : styles.StyleAnswer}>
                <View style={styles.Answer}>
                  {item.status === 2 ?
                    <Image
                      source={{ uri: item.C }}
                      style={{ width: 90, height: 90 }}
                    /> : <Text style={styles.text}>{item.C}</Text>
                  }
                </View>
              </TouchableOpacity>
              <TouchableOpacity key={'D'} style={item.status === 2 ? styles.StyleImgAnswer : styles.StyleAnswer}>
                <View style={styles.Answer}>
                  {item.status === 2 ?
                    <Image
                      source={{ uri: item.D }}
                      style={{ width: 90, height: 90 }}
                    /> : <Text style={styles.text}>{item.D}</Text>
                  }
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  };

  render() {
    const textStyle = this.state.textStyle;
    console.log(this.state.items)
    return (
      <View style={styles.container}>
        <View style={styles.timeCowndown}>
          <Text
            style={{
              fontSize: 22,
              color: 'white',
              fontWeight: 'bold',
              letterSpacing: 0.35,
            }}
          >
            14:30
          </Text>
        </View>
        <View style={styles.Menu}>
          <TouchableOpacity
            onPress={() =>{
              Alert.alert(
                'Thoát',
                'Bạn chưa hoàn thành bài kiểm tra, có muốn thoát?',
                [
                  {
                    text: 'Không',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {text: 'Có', onPress: () => this.props.navigation.goBack()},
                ],
                {cancelable: false},
              );
              }} style={styles.btnContainer}>
            <Image
              source={require('../../../assets/icons/White1.png')}
              style={styles.btnIcon}
            />
          </TouchableOpacity>

          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.timeout}>Nộp Bài</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.Main}>
          <View style={styles.pagination}>
            <Pagination
              listRef={this.refs}
              paginationVisibleItems={this.state.viewableItems}
              paginationItems={this.state.items}
              paginationItemPadSize={2}
              dotFontSizeActive={20}
              dotFontSizeNotActive={15}
              horizontal={true}
              pagingEnabled={true}
              paginationStyle={{ alignItems: "center", justifyContent: 'space-between', position: "absolute", top: 0, margin: 0, bottom: 0, right: 0, bottom: 0, padding: 0 }}
              textStyle={textStyle}
              dotIconHide={true}
              startDotTextHide={true}
              dotEmptyHide={true}
              textEmptyHide={true}
              
            />
          </View>
          <View style={styles.flatlist}>
            <FlatList
              data={this.state.items}
              horizontal
              showsHorizontalScrollIndicator={false}
              onViewableItemsChanged={this.onViewableItemsChanged}
              keyExtractor={this._keyExtractor}
              ref={r => this.refs = r}
              renderItem={this._renderItem}
              pagingEnabled={true}
            /></View>
        </View>
      </View>
    );
  }
}

export default TestScreenView;
