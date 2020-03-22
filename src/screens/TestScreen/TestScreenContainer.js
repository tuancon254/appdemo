import React, { Component } from 'react';
import TestScreenView from './TestScreenView';
import firebase from '../../services/FirebaseConfig';

class TestScreenContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: {},
      questionsCount: [],
      active: 0,
    };
  }

  getQuestionCount = async () => {
    try {
      return await firebase
        .database()
        .ref()
        .child('/Chapters/0/CH1/questions')
        .on('value', snap => {
          this.setState({ questionsCount: snap.val() });
        });
    } catch (e) {
      alert(e.message);
    }
  };

  getQuestion = async index => {
    this.setState({ active: index });
    try {
      return await firebase
        .database()
        .ref()
        .child(`/Chapters/0/CH1/questions/${index}`)
        .on('value', snap => {
          this.setState({ questions: snap.val() });
        });
    } catch (e) {
      alert(e.message);
    }
  };

  componentDidMount() {
    this.getQuestionCount().done();
  }

  render() {
    const { questionsCount, questions, active } = this.state;

    return (
      <TestScreenView
        {...this.props}
        questionsCount={questionsCount}
        questions={questions}
        getQuestion={this.getQuestion}
        active={active}
      />
    );
  }
}

export default TestScreenContainer;
