import React, { Component } from 'react';
import { AppContext } from '../../providers/AppProvider';
import Subject from './Subject';

class SubjectContainer extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      chapters: this.props.navigation.getParam('chapters'),
      profile: this.props.navigation.getParam('profile'),
      chapterDones: this.props.navigation.getParam('chapterDones'),
    };
  }

  render() {
    const { chapters, profile} = this.state;
    return (
      <Subject {...this.props}
      chapters={chapters}
      profile={profile}
      chapterDones={chapterDones}
      ></Subject>
    );
  }
}

export default SubjectContainer;
