import React, { Component } from 'react';
import ScoreItemView from './ScoreItemView';

class ScoreItemContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ScoreItemView {...this.props} />;
  }
}

export default ScoreItemContainer;
