import React, { Component } from 'react';
import TestInfoContainer from './TestInfoContainer';

class TestInfo extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return <TestInfoContainer {...this.props} />;
  }
}

export default TestInfo;
