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


let Data = new _.times


class TestScreenView extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      checkedId: null,
      answer: [this.props.questions[0].A, this.props.questions[0].B, this.props.questions[0].C, this.props.questions[0].D],
      question: this.props.questions[0].question,
      imgLink: this.props.questions[0].link,
      active: this.props.questions,
      id: this.props.questions[0].ID
    };
  }


  myAnswer = index => {
    this.setState({ answer: [this.props.questions[index].A, this.props.questions[index].B, this.props.questions[index].C, this.props.questions[index].D] });
    this.setState({ question: this.props.questions[index].question });
    this.setState({ imgLink: this.props.questions[index].link });
  };


  renderQuestion = (data) => {
    return (
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

            {/* <Image
              source={{uri: this.state.imgLink}}
              style={{ width: 90, height: 90 }}
            />  */}
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
    );
  };


  render() {
    const { active } = this.state;
    console.log(active)


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
          {/* <FlatList
            data={active}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={active === index ? styles.active : styles.number}
                onPress={() => this.myAnswer(index)}
              >
                <Text style={active === index ? styles.numberActive : styles.numberT}>
                  {index + 1}
                </Text>
              </TouchableOpacity>
            )}
          /> */}
        </View>
        {/* <Pagination
          // dotThemeLight //<--use with backgroundColor:"grey"
          listRef={this.refs}//to allow React Native Pagination to scroll to item when clicked  (so add "ref={r=>this.refs=r}" to your list)
          paginationVisibleItems={this.state.viewableItems}//needs to track what the user sees
          paginationItems={data}//pass the same list as data
          paginationItemPadSize={3} //num of items to pad above and below your visable items
          horizontal='true'
          pagingEnabled='true'
        /> */}
        <View style={styles.Main}>
          <FlatList
            data={this.state.active}
            renderItem={this.renderQuestion}//render each item
            horizontal
          />
          {/* <View style={styles.MainContainer}>
            <View style={styles.Questioncontainer}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginBottom: 10,
                }}
              >
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
                </Text> */}

          {/* <Image
                  source={{uri: this.state.imgLink}}
                  style={{ width: 90, height: 90 }}
                />  */}
          {/* </View>
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
          </View> */}
        </View>
      </View>
    );
  }
}

export default TestScreenView;
