import React, { Component } from 'react';
import TestScreenView from './TestScreenView';
import firebase from '../../services/FirebaseConfig';

class TestScreenContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: this.props.navigation.getParam('question'),
    };
  }

  render() {
    console.log(this.props.navigation.getParam('question'));
    return (
      <TestScreenView
        {...this.props}
        questions={this.state.questions}
      />
    );
  }
}

export default TestScreenContainer;
