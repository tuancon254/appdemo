import React, { Component } from 'react';
import CardProfileView from './CardProfileView';

class CardProfileContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <CardProfileView {...this.props} />;
  }
}

export default CardProfileContainer;
