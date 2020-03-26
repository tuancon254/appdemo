import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    KeyboardAvoidingView,
    ImageBackground
} from 'react-native';
import styles from './styles';
import { render } from 'react-dom';

class NewPassword extends React.Component {
    static navigationOptions = {
        header: null,
    };


    constructor(props) {
        super(props);

        this.state = {
            email: '',
            errorMessage: null,
        };
    }

    render() {
        const { navigation } = this.props;
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
                                />
                            </View>
                            <View style={styles.input}>
                                <TextInput
                                    placeholder="Nhập lại mật khẩu mới"
                                    style={styles.input1}
                                    secureTextEntry={true}
                                />
                            </View>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
                            <Text style={styles.guima}>Xác nhận</Text>
                        </TouchableOpacity>
                    </View>



                </View>
            </KeyboardAvoidingView>
        )
    }
}


export default NewPassword;