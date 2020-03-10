import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './styles';
import demoData from './demoData';
import ScoreItem from '../../components/ScoreItem';
import CardProfile from '../../components/CardProfile';

class TestResultScreens extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.ProfileContainer}>
          <Text style={styles.Chao_mung}>Chào Mừng</Text>
        </View>

        <CardProfile
          fullName={'Trần Đình Quang'}
          studentId={'17103823412'}
          className={'17CN'}
        />

        <View style={{ flex: 1 }}>
          <View style={styles.ResultContainer}>
            <Text style={styles.Average}>Điểm trung Bình</Text>
            <Text style={styles.AverageScore}>8,0</Text>
          </View>

          <FlatList
            contentContainerStyle={styles.ResultContainer}
            data={demoData.score}
            keyExtractor={(item, index) => `${index}`}
            renderItem={({ item }) => (
              <ScoreItem title={item.title} score={item.score} />
            )}
          />
        </View>
      </View>
    );
  }
}

export default TestResultScreens;
