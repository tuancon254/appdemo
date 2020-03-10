import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import styles from './CardProfileStyle';

class CardProfileView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fullName, studentId, className } = this.props;

    return (
      <View style={styles.profile}>
        <View style={styles.profile1}>
          <Text style={styles.name}>{fullName}</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.addContainer}>
              <Text style={styles.add}>Mã Sinh Viên</Text>
              <Text style={styles.addShow}>{studentId}</Text>
            </View>
            <View style={styles.decor} />
            <View style={styles.addContainer}>
              <Text style={styles.add}>Lớp</Text>
              <Text style={styles.addShow}>{className}</Text>
            </View>
          </View>
        </View>

        <Image
          source={require('../../../assets/Avatar.png')}
          style={styles.avatar}
        />
      </View>
    );
  }
}

export default CardProfileView;
