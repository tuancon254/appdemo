import React, { Component } from 'react';
import HomeContainer from './HomeContainer';

class Home extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return <HomeContainer {...this.props} />;
  }
}

export default Home;
