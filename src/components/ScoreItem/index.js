import React, { Component } from 'react';
import ScoreItemContainer from './ScoreItemContainer';

class ScoreItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ScoreItemContainer {...this.props} />;
  }
}

export default ScoreItem;
