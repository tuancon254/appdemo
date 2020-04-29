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


class ForgotPassword extends React.Component {
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
                        <Image source={require('../../../../assets/images/abc.png')} style={styles.img} />
                    </View>
                    
                    <View style={styles.Container1}>
                        
                        <View>
                            <Text style={styles.quenmatkhau}>Quên Mật Khẩu?</Text>
                            <Text style={styles.thongbao}>Nhập địa chỉ <Text style={styles.color}>Email</Text> hoặc</Text>
                            <Text style={styles.thongbao}><Text style={styles.color}>Số điện thoại</Text> để Đặt lại mật khẩu</Text>
                            <View style={styles.input}>
                                <TextInput
                                    placeholder="Nhập Email hoặc số điện thoại"
                                    style={styles.input1}
                                />
                            </View>
                        </View>
                       
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OTPcode')}>
                            <Text style={styles.guima}>Gửi Mã</Text>
                        </TouchableOpacity>
        
                    </View>

                </View>
            </KeyboardAvoidingView>
        )
    }
}

export default ForgotPassword;