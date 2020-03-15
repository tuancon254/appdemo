import React, { Component } from 'react';
import TestInfoContainer from './TestInfoContainer';

class TestInfo extends Component {
  static navigationOptions = {
    header:null
  };
  constructor(props) {
    super(props);
  }

  render() {

    return <TestInfoContainer {...this.props} />;
  }
}

export default TestInfo;
