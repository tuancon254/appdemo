import React, { Component } from 'react';
import HomeView from './HomeView';
import firebase from '../../services/FirebaseConfig';
import { AppContext } from '../../providers/AppProvider';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => <HomeView {...this.props} data={value} />}
      </AppContext.Consumer>
    );
  }
}

export default HomeContainer;
