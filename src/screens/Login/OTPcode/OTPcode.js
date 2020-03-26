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

class OTPcode extends React.Component {
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
        const { navigation } =this.props;
        return (
            
            <View style={styles.Container}>
                
            <View style={styles.Container1}>
                <View style={styles.img1}>
                    <Image source={require('../../../../assets/images/secure.png')} style={styles.img} /></View>
                
                    <Text style={styles.quenmatkhau}>Mã Xác Nhận</Text>
                        <Text style={styles.thongbao}>Mã OTP đã được gửi đến Email</Text>
                        <Text style={styles.thongbao}><Text style={styles.color}>Tuancon254@gmail.com</Text></Text>
                    <View style={styles.input}>
                        <TextInput
                            placeholder="*  *  *  *  *  *"
                            style={styles.input1}
                            textContentType="creditCardNumber"
                            keyboardType="number-pad"
                        />
                    </View>
               
            </View>
            
            <View style={styles.Container1}>
                <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('NewPassword')}>
                    <Text style={styles.guima}>Xác nhận</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}


export default OTPcode;