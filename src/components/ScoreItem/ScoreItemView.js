import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import styles from './ScoreItemStyle';

class ScoreItemView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, score } = this.props;

    return (
      <View style={styles.result}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ paddingRight: 10 }}>
            <Image
              style={{ width: 19.53, height: 16, marginTop: 5 }}
              source={require('../../../assets/Group.png')}
            />
          </View>

          <Text style={styles.resultText}>{title}</Text>
        </View>
        <Text style={styles.score}>{score} điểm</Text>
      </View>
    );
  }
}

export default ScoreItemView;
