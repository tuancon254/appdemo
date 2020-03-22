import React, { Component } from 'react';
import TestScreenContainer from './TestScreenContainer';

class TestScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return <TestScreenContainer {...this.props} />;
  }
}

export default TestScreen;
