import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import useStyles from './SignOutStyle';

class SignOutView extends Component {
  styles = useStyles();

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={this.styles.root}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
}

export default SignOutView;
