import React from 'react';
import { FlatList, Text, View, Image } from 'react-native';
import styles from './styles';
import { getIngredientName, getAllIngredients } from '../../data/MockDataAPI';
import { recipes } from '../../data/dataArrays';
import { CheckBox } from 'react-native-elements';
import { Answers, Question } from '../../data/dataArrays';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import BackButton from '../../components/BackButton/BackButton'

const data = {
  "Bai1" : {
    "Cau1" : {
      "Answer" : {
        "Answer1" : "Phần tử hữu hạn",
        "Answer2" : "Phân phối trực tiếp",
        "Answer3" : "Khung tương đương",
        "Answer4" : "Phương pháp lực"
      },
      "CorrectAnswer" : "Answer1",
      "Question" : "Phần mềm SAP2000 là phần mềm Phân Tích và Thiết Kế Kết cấu dựa trên phương pháp phân tích nào?"
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

  questionItem = (question, index) => {
    return (
      <View style={styles.Answers} key={index}>
        <CheckBox
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.state.checkedId === index + 1}
          title={question.question}
          onPress={() => this.setState({ checkedId: question.id })}
          containerStyle={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  };

  renderQuestion = ({ item, index }) => {
    return (
      <View key={index}>
        <View style={styles.container}>
          <View style={styles.Question}>
            <Text>{item.title}</Text>
          </View>

          {item.questions.map((question, index) => {
            return this.questionItem(question, index);
          })}
        </View>
      </View>
    );
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>

        <View style={styles.Menu}>
          <BackButton onPress={() => navigation.goBack()} />
          <View style={styles.Menu}><Text style={{fontSize:19}}>Chương I</Text></View>
          <View>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require('../../../assets/icons/menu.png')}
                style={styles.iconMenu}
              />
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.container}>


          <View style={styles.AnswerContainer}>
            <View><Text>Tổng quan phần mềm phân tích và thiết kế kết cấu - SAP2000</Text></View>
            <Text>00:15</Text>
            <Text>Câu hỏi 1</Text>
            <Text>Các liên kết trong mô hình SAP2000?</Text>
          </View>


          <View style={styles.AnswerContainer}>
            <TouchableOpacity style={styles.StyleAnswer}>
              <View style={styles.ABCD}><Text style={styles.text1}>a</Text></View>
              <View style={styles.Answer}><Text style={styles.text}>Liên kết cứng</Text></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.StyleAnswer}>
              <View style={styles.ABCD}><Text style={styles.text1}>b</Text></View>
              <View style={styles.Answer}><Text style={styles.text}>Liên kết đàn hồi</Text></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.StyleAnswer}>
              <View style={styles.ABCD}><Text style={styles.text1}>c</Text></View>
              <View style={styles.Answer}><Text style={styles.text}>Liên kêt cục bộ khử bớt các thành phần phân lực</Text></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.StyleAnswer}>
              <View style={styles.ABCD}><Text style={styles.text1}>d</Text></View>
              <View style={styles.Answer}><Text style={styles.text}>Chọn template Grid Only > tùy chỉnh trên cửa sổ Quick Grid Lines</Text></View>
            </TouchableOpacity>
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
