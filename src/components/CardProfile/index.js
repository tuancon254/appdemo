import React, { Component } from 'react';
import CardProfileContainer from './CardProfileContainer';

class CardProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <CardProfileContainer {...this.props} />;
  }
}

export default CardProfile;
