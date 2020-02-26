import React from 'react';
import { FlatList, Text, View, TouchableHighlight, Image, ScrollView } from 'react-native';
import styles from './styles';
import { recipes } from '../../data/dataArrays';

function renderResult() {
    return (
        <ScrollView style={styles.ResultContainer}>
            <View style={styles.Result}>
                <Text style={styles.ResultText}>Chương 1</Text>
                <Text style={styles.Score}>8 điểm</Text>
            </View></ScrollView>
    )
}


function TestResultScreens({ navigation }) {
    return (
        <View style={styles.Container}>
            <View style={styles.ProfileContainer}>
                <Text style={styles.Chao_mung}>Chào Mừng</Text>
                <View style={styles.profile}>
                    <View>
                        <View style={styles.profile1}>
                            <Text style={styles.Name}>Trần Đình Giang</Text>
                            <View style={{ flexDirection: 'row', }}>
                                <View style={styles.AddContainer}>
                                    <Text style={styles.Add}>Mã Sinh Viên</Text>
                                    <Text style={styles.Add_show}>1755010033</Text>
                                </View>
                                <View style={styles.Decor}></View>
                                <View style={styles.AddContainer}>
                                    <Text style={styles.Add}>Lớp</Text>
                                    <Text style={styles.Add_show}>17CN</Text>
                                </View>
                            </View>
                        </View>
                        <Image source={require("../../../assets/Avatar.png")} style={styles.Avatar} />
                    </View></View>
            </View>
            <View style={{ flex: 60 }}>
                <View style={styles.ResultContainer}>
                    <Text style={styles.Average}>Điểm trung Bình</Text>
                    <Text style={styles.AverageScore}>8,0</Text>
                </View>
                <ScrollView style={styles.ResultContainer}>
                    <View style={styles.Result}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ paddingRight: 10 }}><Image style={{ width: 19.53, height: 16,marginTop:5 }} source={require('../../../assets/Group.png')} /></View>
                            <Text style={styles.ResultText}>Chương 1</Text>
                        </View>
                        <Text style={styles.Score}>8 điểm</Text>
                    </View>
                    <View style={styles.Result}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ paddingRight: 10 }}><Image style={{ width: 19.53, height: 16,marginTop:5 }} source={require('../../../assets/Group.png')} /></View>
                            <Text style={styles.ResultText}>Chương 2</Text>
                        </View>
                        <Text style={styles.Score}>8 điểm</Text>
                    </View>
                    <View style={styles.Result}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ paddingRight: 10 }}><Image style={{ width: 19.53, height: 16,marginTop:5 }} source={require('../../../assets/Group.png')} /></View>
                            <Text style={styles.ResultText}>Chương 3</Text>
                        </View>
                        <Text style={styles.Score}>8 điểm</Text>
                    </View>
                    <View style={styles.Result}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ paddingRight: 10 }}><Image style={{ width: 19.53, height: 16,marginTop:5 }} source={require('../../../assets/Group.png')} /></View>
                            <Text style={styles.ResultText}>Chương 4</Text>
                        </View>
                        <Text style={styles.Score}>8 điểm</Text>
                    </View>
                    <View style={styles.Result}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ paddingRight: 10 }}><Image style={{ width: 19.53, height: 16,marginTop:5 }} source={require('../../../assets/Group.png')} /></View>
                            <Text style={styles.ResultText}>Chương 5</Text>
                        </View>
                        <Text style={styles.Score}>8 điểm</Text>
                    </View>
                    <View style={styles.Result}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ paddingRight: 10 }}><Image style={{ width: 19.53, height: 16,marginTop:5 }} source={require('../../../assets/Group.png')} /></View>
                            <Text style={styles.ResultText}>Chương 6</Text>
                        </View>
                        <Text style={styles.Score}>8 điểm</Text>
                    </View>
                    <View style={styles.Result}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ paddingRight: 10 }}><Image style={{ width: 19.53, height: 16,marginTop:5 }} source={require('../../../assets/Group.png')} /></View>
                            <Text style={styles.ResultText}>Chương 7</Text>
                        </View>
                        <Text style={styles.Score}>8 điểm</Text>
                    </View>
                    <View style={styles.Result}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ paddingRight: 10 }}><Image style={{ width: 19.53, height: 16,marginTop:5 }} source={require('../../../assets/Group.png')} /></View>
                            <Text style={styles.ResultText}>Chương 8</Text>
                        </View>
                        <Text style={styles.Score}>8 điểm</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default TestResultScreens;