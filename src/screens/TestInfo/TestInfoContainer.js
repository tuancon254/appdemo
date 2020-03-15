import React, { Component } from 'react';
import TestInfoView from './TestInfoView';

class TestInfoContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <TestInfoView {...this.props} />;
  }
}

export default TestInfoContainer;
