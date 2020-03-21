import React from 'react';
import { FlatList, Text, View, Image } from 'react-native';
import styles from './styles';
import { getIngredientName, getAllIngredients } from '../../data/MockDataAPI';
import { recipes } from '../../data/dataArrays';
import { CheckBox } from 'react-native-elements';
import { Answers, Question } from '../../data/dataArrays';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import BackButton from '../../components/BackButton/BackButton'
import Pagination, { Icon, Dot } from 'react-native-pagination';

const data = {
  "Bai1": {
    "Cau1": {
      "Answer": {
        "Answer1": "Phần tử hữu hạn",
        "Answer2": "Phân phối trực tiếp",
        "Answer3": "Khung tương đương",
        "Answer4": "Phương pháp lực"
      },
      "CorrectAnswer": "Answer1",
      "Question": "Phần mềm SAP2000 là phần mềm Phân Tích và Thiết Kế Kết cấu dựa trên phương pháp phân tích nào?"
    }
  }
}




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

  // questionItem = (question, index) => {
  //   return (
  //     <View style={styles.Answers} key={index}>
  //       <CheckBox
  //         checkedIcon="dot-circle-o"
  //         uncheckedIcon="circle-o"
  //         checked={this.state.checkedId === index + 1}
  //         title={question.question}
  //         onPress={() => this.setState({ checkedId: question.id })}
  //         containerStyle={{ backgroundColor: 'transparent' }}
  //       />
  //     </View>
  //   );
  // };

  renderQuestion = () => {
    return (
      <View style={styles.AnswerContainer}>
        <TouchableOpacity style={styles.StyleAnswer}>
          <View style={styles.ABCD}><Text style={styles.text1}>a</Text></View>
          <View style={styles.Answer}><Text style={styles.text}>Liên kết cứng</Text></View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.timeCowndown}>
          <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold', letterSpacing: 0.35 }}>14:30</Text>
        </View>
        <View style={styles.Menu}>

          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnContainer}>
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
                <Image source={require('../../../assets/images/II-8.png')} style={{ width: 90,height:90 }} />
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



{/* <FlatList
          showsVerticalScrollIndicator={false}
          data={Answers}
          renderItem={this.renderQuestion}
          keyExtractor={item => `${item.recipeId}`}
        /> */}
