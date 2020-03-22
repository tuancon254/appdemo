import React from 'react';
import { FlatList, Text, View, Image,Alert } from 'react-native';
import styles from './styles';
import { getIngredientName, getAllIngredients } from '../../data/MockDataAPI';
import { recipes } from '../../data/dataArrays';
import { CheckBox } from 'react-native-elements';
import { Answers, Question } from '../../data/dataArrays';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Pagination, { Icon, Dot } from 'react-native-pagination';
import CountDown from './CountDown'


export default class TestScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      checkedId: null,
    };
  }


  onCheck = a => {
    if (this.state.checked === false) this.setState({ checked: true });
  };


  render() {
    const { navigation } = this.props;

    const test: [] = navigation.getParam('question');
    console.log(test);

    return (
      <View style={styles.container}>
        <View style={styles.timeCowndown}>
          <CountDown />
        </View>
        <View style={styles.Menu}>

          <TouchableOpacity onPress={() =>{
            Alert.alert(
              'Thoát',
              'Bạn chưa hoàn thành bài kiểm tra, có muốn thoát?',
              [
                {
                  text: 'Không',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'Có', onPress: () => navigation.goBack()},
              ],
              {cancelable: false},
            );
            }} style={styles.btnContainer}>
            <Image source={require('../../../assets/icons/White1.png')} style={styles.btnIcon} />
          </TouchableOpacity>



          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.timeout}>Nộp Bài</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.numberContainer}>
          <TouchableOpacity style={styles.number}>
            <Text style={styles.numberT}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.number}>
            <Text style={styles.numberT}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 30, height: 30, borderWidth: 2, borderColor: "white", backgroundColor: 'white', borderRadius: 8, borderStyle: 'solid', alignItems: 'center', marginRight: 7, flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ fontSize: 22, color: 'black', textAlign: 'center' }}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.number}>
            <Text style={styles.numberT}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.number}>
            <Text style={styles.numberT}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.number}>
            <Text style={styles.numberT}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.number}>
            <Text style={styles.numberT}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.number}>
            <Text style={styles.numberT}>8</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.Main}>
          <View style={styles.MainContainer}>
            <View style={styles.Questioncontainer}>

              <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginBottom: 10, }}>
                <View style={styles.q1}><Text style={{ fontWeight: 'bold', fontSize: 22 }}>3.</Text></View>
                <View style={styles.score}><Text style={{ color: "#FF7F2D", marginLeft: 8, marginRight: 8, }}>3 Điểm</Text></View>
              </View>

              <View style={styles.Question}>
                <Text style={styles.question}>Biểu tượng này trên thanh công cụ là gì?</Text>
                <Image source={require('../../../assets/images/II-8.png')} style={{ width: 90, height: 90 }} />
              </View>
            </View>


            <View style={styles.AnswerContainer}>
              <TouchableOpacity style={styles.StyleAnswer}>
                <View style={styles.Answer}><Text style={styles.text}>Liên kết cứng</Text></View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.StyleAnswer}>
                <View style={styles.Answer}><Text style={styles.text}>Liên kết đàn hồi</Text></View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.StyleAnswer}>
                <View style={styles.Answer}><Text style={styles.text}>Liên kêt cục bộ khử bớt các thành phần phân lực</Text></View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.StyleAnswer}>
                <View style={styles.Answer}><Text style={styles.text}>Chọn template Grid Only > tùy chỉnh trên cửa sổ Quick Grid Lines</Text></View>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </View>
    );
  }
}




