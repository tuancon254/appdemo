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
import _ from 'lodash';


class TestScreenView extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      checkedId: null,
      answer: [this.props.questions[0].A, this.props.questions[0].B, this.props.questions[0].C, this.props.questions[0].D],
      question: [this.props.questions[0].question],
      imgLink: this.props.questions[0].link,
      active: 0,
    };
  }



  myAnswer = index => {
    this.setState({ answer: [this.props.questions[index].A, this.props.questions[index].B, this.props.questions[index].C, this.props.questions[index].D] });
    this.setState({ question: this.props.questions[index].question });
    this.setState({ imgLink: this.props.questions[index].link });
  };

  _keyExtractor = (item, index) => index;


  render() {
    const  active = [] = this.props.questions;
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
            onPress={() => this.props.navigation.goBack()}
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
            data={active}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ index }) => (
              <TouchableOpacity
                style={this.state.id === index ? styles.active : styles.number}
                onPress={() => this.myAnswer(index)}
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
                }}>
                <View style={styles.q1}>
                  <Text style={{ fontWeight: 'bold', fontSize: 22 }}>.</Text>
                </View>
                <View style={styles.score}>
                  <Text
                    style={{ color: '#FF7F2D', marginLeft: 8, marginRight: 8 }}
                  >
                    1 Điểm
                  </Text>
                </View>
              </View>

              <View style={styles.Question}>
                <Text style={styles.question}>
                  {this.state.question}
                </Text>

                <Image
                  source={{ uri: this.state.imgLink }}
                  style={{ width: 90, height: 90 }}
                />
              </View>
            </View>

            <View style={styles.AnswerContainer}>
              {this.state.answer.map((item, index) => (
                <TouchableOpacity key={index} style={styles.StyleAnswer}>
                  <View style={styles.Answer}>
                    <Text style={styles.text}>{item}</Text>

                    <Image
                      source={{ uri: item }}
                      style={{ width: 90, height: 90 }}
                    />

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



// renderQuestion = (data, index) => {
  //   return (
  //     <View style={styles.MainContainer}>
  //       <View style={styles.Questioncontainer}>
  //         <View
  //           style={{
  //             justifyContent: 'space-between',
  //             flexDirection: 'row',
  //             marginBottom: 10,
  //           }}
  //         >
  //           <View style={styles.q1}>
  //             <Text style={{ fontWeight: 'bold', fontSize: 22 }}>.</Text>
  //           </View>
  //           <View style={styles.score}>
  //             <Text
  //               style={{ color: '#FF7F2D', marginLeft: 8, marginRight: 8 }}
  //             >
  //               1 Điểm
  //             </Text>
  //           </View>
  //         </View>

  //         <View style={styles.Question}>
  //           <Text style={styles.question}>
  //             {this.state.question}
  //           </Text>


  //           {/* <Image
  //             source={{uri: this.state.imgLink}}
  //             style={{ width: 90, height: 90 }}
  //           />  */}
  //         </View>
  //       </View>

  //       <View style={styles.AnswerContainer}>
  //         {this.state.answer.map((item) => (
  //           <TouchableOpacity key={index} style={styles.StyleAnswer}>
  //             <View style={styles.Answer}>
  //               <Text style={styles.text}>{item}</Text>
  //               {/* <Image
  //                 source={{ uri: data }}
  //                 style={{ width: 90, height: 90 }}
  //               /> */}
  //             </View>
  //           </TouchableOpacity>
  //         ))}
  //       </View>
  //     </View>
  //   );
  // };
