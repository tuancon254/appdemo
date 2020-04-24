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
import firebase from '../../services/FirebaseConfig';
import CountDown from 'react-native-countdown-component';

class TestScreenView extends React.Component {

  static navigationOptions = {
    header: null,
    
  };

  constructor(props) {
    super(props);

    // Map collection list true answer
    global.myTrueAnswer = new Map();
    global.yourTrueAnswer = new Map();
    global.user = firebase.auth().currentUser;
    global.scores = 0;
    global.timer = 0;

    this.state = {
      items: this.props.questions,
      chapterName: this.props.navigation.getParam('chapterName'),
      userName: this.props.navigation.getParam('userName'),
      textStyle: styles.textStyle,
      ImgContainer: null,
      fucus: false,
    };
  }

  componentDidMount() {
    // sự kiện thoát khỏi màn hình
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

  _insertYourTrueAnswer = (ID, answer) =>{
    this.setState({fucus: true});
    yourTrueAnswer.set(ID, answer);
  }

  _checkTest = () => {
    if(yourTrueAnswer.size < myTrueAnswer.size && timer < (60 * 10 + 4)){
      Alert.alert(
        'Thông báo!',
        'Bạn chưa hoàn thành bài kiểm tra, vui lòng hoàn thành trước khi nộp bài!',
        [
          {
            text: 'OK',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );
    } else if(timer >= (60 * 10 + 4) || yourTrueAnswer.size == myTrueAnswer.size) {
      let d = new Date();
      var index;
      var listQ = [];
      var realTime = '';
      timer++;

      if(myTrueAnswer.get('Q1') == yourTrueAnswer.get('Q1')) scores++;
      if(myTrueAnswer.get('Q2') == yourTrueAnswer.get('Q2')) scores++;
      if(myTrueAnswer.get('Q3') == yourTrueAnswer.get('Q3')) scores++;
      if(myTrueAnswer.get('Q4') == yourTrueAnswer.get('Q4')) scores++;
      if(myTrueAnswer.get('Q5') == yourTrueAnswer.get('Q5')) scores++;
      if(myTrueAnswer.get('Q6') == yourTrueAnswer.get('Q6')) scores++;
      if(myTrueAnswer.get('Q7') == yourTrueAnswer.get('Q7')) scores++;
      if(myTrueAnswer.get('Q8') == yourTrueAnswer.get('Q8')) scores++;
      if(myTrueAnswer.get('Q9') == yourTrueAnswer.get('Q9')) scores++;
      if(myTrueAnswer.get('Q10') == yourTrueAnswer.get('Q10')) scores++;

      let ngay = d.getDate();
      if(ngay.toString().length<2) ngay = '0'+ngay.toString();
      let thang = parseInt(d.getMonth()+1);
      if(thang.toString().length<2) thang = '0'+thang.toString();
      let date = ngay+'-'+thang+'-'+d.getFullYear();
      
      if(this.state.chapterName == 'CH1') index = 0;
      else if(this.state.chapterName == 'CH2') index = 1;
      else if(this.state.chapterName == 'CH3') index = 2;
      else if(this.state.chapterName == 'CH4') index = 3;
      else if(this.state.chapterName == 'CH5') index = 4;
      else if(this.state.chapterName == 'CH6') index = 5;
      else if(this.state.chapterName == 'CH7') index = 6;
      else if(this.state.chapterName == 'CH8') index = 7;
      else if(this.state.chapterName == 'CH9') index = 8;
      else if(this.state.chapterName == 'CH10') index = 9;

      realTime = ((timer-timer%60)/60) + ' : ' + timer%60;

      let iterator1 = myTrueAnswer.entries();
      for (let item of iterator1) {
        listQ.push(item[0]+':'+item[1]);
      }

      // insert data to firebase realtime
      firebase
      .database()
      .ref('TestInfo/'+index+'/'+this.state.chapterName+'/'+this.props.yourClass+'/'+user.uid)
      .set({
          "selected" : listQ.toString(),
          "realTime" : realTime,
          "date" : date.toString(),
          "scores" : scores,
          "name" : this.state.userName+'',
          "email" : user.email+'',
          "status": 1
      }).then(()=>{
          Alert.alert(
          'Done!',
          'Bạn vừa hoàn thành bài kiểm tra, số điểm của bạn là: '+ scores + ' điểm.',
          [
            {
              text: 'Xem lại',
              onPress: () => Alert.alert('Chức năng đang update, vui lòng quay lại sau','Rất xin lỗi vì xự bất tiện này!!!',
                                [
                                  {
                                    text: 'Go home',
                                    onPress: () => this.props.navigation.navigate('Home'),
                                  },
                                ],
                                ),
              style: 'cancel',
            },
            {
              text: 'Go home',
              onPress: () => this.props.navigation.navigate('Home'),
            },
          ],
          {cancelable: false},
        );
      }).catch((error)=>{
          Alert.alert(
          'Có lỗi xảy ra!',
          'Vui lòng thử lại sau, rất xin lỗi vì xự bất tiện này!',
          [
            {
              text: 'Go home',
              onPress: () => this.props.navigation.navigate('Home'),
            },
          ],
          {cancelable: false},
        );
      })
      }
  }

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
                  {this.state.fucus === false ? '123' : '22'} 
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

          {/* Answer view */}
          <View style={styles.AnswerContainer}>
            <View style={item.status === 2 ? styles.imgContainer : this.state.ImgContainer}>
              <TouchableOpacity key={'A'} style={{backgroundColor: (this.state.fucus ? '#000' : '#fff')}} onPress = {() => this._insertYourTrueAnswer(item.ID, 'A')}>
                <View style={styles.Answer}>
                  {item.status === 2 ?
                    <Image
                      source={{ uri: item.A }}
                      style={{ width: 90, height: 90 }}
                    /> : <Text style={styles.text}>{item.A}</Text>
                  }
                </View>
              </TouchableOpacity>
              <TouchableOpacity key={'B'} style={item.status === 2 ? styles.StyleImgAnswer : styles.StyleAnswer} onPress = {() => this._insertYourTrueAnswer(item.ID, 'B')}>
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
              <TouchableOpacity key={'C'} style={item.status === 2 ? styles.StyleImgAnswer : styles.StyleAnswer} onPress = {() => this._insertYourTrueAnswer(item.ID, 'C')}>
                <View style={styles.Answer}>
                  {item.status === 2 ?
                    <Image
                      source={{ uri: item.C }}
                      style={{ width: 90, height: 90 }}
                    /> : <Text style={styles.text}>{item.C}</Text>
                  }
                </View>
              </TouchableOpacity>
              <TouchableOpacity key={'D'} style={item.status === 2 ? styles.StyleImgAnswer : styles.StyleAnswer} onPress = {() => this._insertYourTrueAnswer(item.ID, 'D')}>
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
    this.state.items.forEach(element => {
      myTrueAnswer.set(element.ID, element.true)
    });
    const textStyle = this.state.textStyle;
    return (
      <View style={styles.container}>
        <View style={styles.timeCowndown}>
          {/* component timeCowndown */}
          <CountDown
            until={60 * 10 + 5}
            onChange={() => timer++ }
            onFinish={() => this._checkTest()}
            timeLabels={{d: '', h: '', m: '', s: ''}}
            size={15}
            timeToShow={['M', 'S']}
          />
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
            <TouchableOpacity style={styles.button} onPress = {this._checkTest}>
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
              dotFontSizeActive={24}
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
