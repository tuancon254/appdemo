import React from 'react';
import { FlatList, Text, View, Image } from 'react-native';
import styles from './styles';
import { getIngredientName, getAllIngredients } from '../../data/MockDataAPI';
import { recipes } from '../../data/dataArrays';
import { CheckBox } from 'react-native-elements';
import { Answers, Question } from '../../data/dataArrays';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import BackButton from '../../components/BackButton/BackButton';
import Pagination, { Icon, Dot } from 'react-native-pagination';

class TestScreenView extends React.Component {
  static navigationOptions = {
    header: null,
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

  renderQuestion = () => {
    return (
      <View style={styles.AnswerContainer}>
        <TouchableOpacity style={styles.StyleAnswer}>
          <View style={styles.ABCD}>
            <Text style={styles.text1}>a</Text>
          </View>
          <View style={styles.Answer}>
            <Text style={styles.text}>Liên kết cứng</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const {
      navigation,
      questionsCount,
      questions,
      getQuestion,
      active,
    } = this.props;

    const answer = [
      questions.cau1,
      questions.cau2,
      questions.cau3,
      questions.cau4,
    ];

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
            onPress={() => navigation.goBack()}
            style={styles.btnContainer}
          >
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

        <View style={styles.numberContainer}>
          <FlatList
            data={questionsCount}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={active === index ? styles.active : styles.number}
                onPress={() => getQuestion(index)}
              >
                <Text style={active === index ? styles.numberActive : styles.numberT}>
                  {index + 1}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

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
                  <Text style={{ fontWeight: 'bold', fontSize: 22 }}>3.</Text>
                </View>
                <View style={styles.score}>
                  <Text
                    style={{ color: '#FF7F2D', marginLeft: 8, marginRight: 8 }}
                  >
                    3 Điểm
                  </Text>
                </View>
              </View>

              <View style={styles.Question}>
                <Text style={styles.question}>
                  Biểu tượng này trên thanh công cụ là gì?
                </Text>
                <Image
                  source={require('../../../assets/images/II-8.png')}
                  style={{ width: 90, height: 90 }}
                />
              </View>
            </View>

            <View style={styles.AnswerContainer}>
              {answer.map((item, index) => (
                <TouchableOpacity key={index} style={styles.StyleAnswer}>
                  <View style={styles.Answer}>
                    <Text style={styles.text}>{item}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default TestScreenView;
