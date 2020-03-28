import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    KeyboardAvoidingView,
    ImageBackground,
    Alert,
    BackHandler
} from 'react-native';
import styles from './styles';
import firebase from '../../../services/FirebaseConfig'

class NewPassword extends React.Component {
    static navigationOptions = {
        header: null,
    };


    constructor(props) {
        super(props);

        this.state = {
            email: '',
            errorMessage: null,
            Newpassword: "",
            ReText: "",
        };
    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
      }
    
      componentWillUnmount() {
        this.backHandler.remove()
      }
    
      handleBackPress = () => {
        Alert.alert(
          'Thoát',
          'Dữ liệu sẽ không được lưu lại, có muốn thoát?',
          [
            {
              text: 'Không',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'Có', onPress: () => this.props.navigation.goBack()},
          ],
          {cancelable: false},
        );
        return true;
      }


    onPressXacNhan = () => {
        var user = firebase.auth().currentUser;
        var newPassword = this.state.Newpassword 
        user.updatePassword(newPassword)
            .then(() => { Alert.alert(
                    'Thành Công',
                    'Mật Khẩu của bạn đã được cập nhật',
                    'Đề nghị đăng nhập lại',
                    [
                        { text: 'OK', onPress: () => this.props.navigation.navigate("Login") },
                    ],
                    { cancelable: false }
                )
            })
            .catch((error) => { })
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }} keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}>
                <View style={styles.Container}>

                    <View style={styles.img1}>
                        <Image source={require('../../../../assets/images/newpass.png')} style={styles.img} />
                    </View>

                    <View style={styles.Container1}>
                        <View>
                            <Text style={styles.quenmatkhau}>Mật Khẩu Mới</Text>
                            <Text style={styles.thongbao}>Nhập mật khẩu mới và đừng quên nhé!</Text>
                            <View style={styles.input}>
                                <TextInput
                                    placeholder="Nhập mật khẩu mới"
                                    style={styles.input1}
                                    secureTextEntry={true}
                                    value={this.state.Newpassword}
                                    onChangeText={(Text) => { this.setState({ Newpassword: Text }) }}
                                />
                            </View>
                            <View style={this.state.ReText === this.state.Newpassword ? styles.input : styles.input2}>
                                <TextInput
                                    placeholder="Nhập lại mật khẩu mới"
                                    style={ styles.input1 }
                                    secureTextEntry={true}
                                    value={this.state.ReText}
                                    onChangeText={(Text) => { this.setState({ ReText: Text }) }}
                                />
                            </View>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={this.onPressXacNhan}>
                            <Text style={styles.guima}>Xác nhận</Text>
                        </TouchableOpacity>
                    </View>



                </View>
            </KeyboardAvoidingView>
        )
    }
}


export default NewPassword;