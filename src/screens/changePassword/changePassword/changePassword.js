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
    Alert
} from 'react-native';
import styles from './styles';
import firebase from '../../../services/FirebaseConfig'

class changePassword extends React.Component {
    static navigationOptions = {
        header: null,
    };


    constructor(props) {
        super(props);

        this.state = {
            email: '',
            errorMessage: null,
            value: "",
            currentPassword: ""
        };
    }
    reauthenticate = (currentPassword) => {
        var user = firebase.auth().currentUser;
        var cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
        return user.reauthenticateWithCredential(cred)
    }

    onPressVerifyPassword = () => {
        this.reauthenticate(this.state.currentPassword).then(() => this.props.navigation.navigate('NewPassword')).catch((error)=> {Alert.alert("Sai mật khẩu, xin nhập lại")})
    }   
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }} keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}>
                <View style={styles.Container}>
                    <View style={styles.img1}>
                        <Image source={require('../../../../assets/images/abc.png')} style={styles.img} />
                    </View>

                    <View style={styles.Container1}>

                        <View>
                            <Text style={styles.quenmatkhau}>Đổi mật khẩu</Text>
                            <Text style={styles.thongbao}>Nhập mật khẩu <Text style={styles.color}>Hiện tại</Text> để xác thực</Text>

                            <View style={styles.input}>
                                <TextInput
                                    placeholder="Xác thực mật khẩu"
                                    style={styles.input1}
                                    secureTextEntry={true}
                                    value={this.state.currentPassword}
                                    onChangeText={(text) => { this.setState({ currentPassword: text }) }}
                                />
                            </View>
                        </View>

                        <TouchableOpacity style={styles.button} onPress={this.onPressVerifyPassword}>
                            <Text style={styles.guima}>Xác thực</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </KeyboardAvoidingView>
        )
    }
}

export default changePassword;