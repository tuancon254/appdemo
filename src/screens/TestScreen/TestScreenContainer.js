import React, { Component } from 'react';
import TestScreenView from './TestScreenView';

class TestScreenContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: this.props.navigation.getParam('question'),
      yourClass: this.props.navigation.getParam('yourClass'),
    };
  }

  render() {
    return (
      <TestScreenView
        {...this.props}
        questions={this.state.questions}
        yourClass={this.state.yourClass}
      />
    );
  }
}

export default TestScreenContainer;
