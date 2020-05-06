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


class ForgotPassword extends React.Component {
    static navigationOptions = {
        header: null,
    };


    constructor(props) {
        super(props);

        this.state = {
            email: '',
            errorMessage: null,
            value: ''
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
                                    value={this.state.value}
                                    onChangeText={(text)=>{this.setState({value: text})}}
                                />
                            </View>
                        </View>
                       
                        <TouchableOpacity style={styles.button} onPress={() =>this.state.value === '' ? Alert.alert("Thông báo",'Xin hãy nhập email'): navigation.navigate('OTPcode',{value:this.state.value})}>
                            <Text style={styles.guima}>Gửi Mã</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </KeyboardAvoidingView>
        )
    }
}

export default ForgotPassword;