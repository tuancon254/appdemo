import React, { Component } from 'react';
import { AppContext } from '../../providers/AppProvider';
import Subject from './Subject';

class SubjectContainer extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => <Subject value={value} {...this.props} />}
      </AppContext.Consumer>
    );
  }
}

export default SubjectContainer;
