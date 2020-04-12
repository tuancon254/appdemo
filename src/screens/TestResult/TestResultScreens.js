
import React, { Component } from 'react';
import { FlatList, Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import demoData from './demoData';
import ScoreItem from '../../components/ScoreItem';
import CardProfile from '../../components/CardProfile';
import BackButton from '../../components/BackButton/BackButton';
import BackButtonBlack from '../../components/BackButton/BackButtonBlack';


class TestResultScreens extends Component {
    static navigationOptions = {
        header: null,
      };
    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <View style={{ flex: 45 }}>
                    <View style={styles.Menu}>
                        <BackButtonBlack onPress={() => navigation.goBack()}/>
                        <View>
                            <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.button}>
                                <Image
                                    source={require('../../../assets/icons/menu.png')}
                                    style={styles.iconMenu}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.ProfileContainer}>
                        <Text style={styles.Chao_mung}>Chào Mừng</Text>
                    </View>

                    <CardProfile
                        fullName={'Trần Thị Hồng Ngọc'}
                        studentId={'17103823412'}
                        className={'17CN'}
                    /></View>
                <View style={{ flex: 55, marginBottom: 20,marginTop:20 }}>
                    <View style={styles.ResultContainer}>
                        <Text style={styles.Average}>Điểm trung Bình</Text>
                        <Text style={styles.AverageScore}>8,0</Text>
                    </View>
                    <View style={styles.result}>
                        <FlatList
                            data={demoData.score}
                            keyExtractor={(item, index) => `${index}`}
                            renderItem={({ item }) => (
                                <ScoreItem title={item.title} score={item.score} />
                            )}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

export default TestResultScreens;
