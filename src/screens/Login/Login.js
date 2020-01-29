import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

export default class Login extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerMode: 'block'
  });

    constructor(props) {
        super(props);
        this.state = {
          useName: 'abc'
         };
    }

    onPressLogin = () =>{
      this.props.navigation.navigate('Home');

    }
    render() {
        return (
          <View style={styles.container}>
            <Image source={require('../../../assets/images/logo.png')} style={{width:128,height:118,marginBottom:80}} />
    
            <View style={{ backgroundColor: "white", width: '70%', height: 90, borderRadius: 5, flexDirection: 'column', alignContent: 'flex-start', alignItems: 'center' }}>
              <View style={{ backgroundColor: "white", width: '98%', height: '50%', flexDirection: 'row', alignContent: 'flex-start', borderBottomWidth: 0.5 }}>
                <Image source={require('../../../assets/images/mail.png')} style={{ width: 30, height: 30, marginTop: 8,marginLeft: 10 }} />
                <TextInput
                  placeholder="Username or email"
                  value={this.state.username}
                  onChangeText={(text) => this.handleUserChange(text)}
                  style={{ width: '65%', height: '100%', marginLeft: 20, marginTop: 2, }}
                  returnKeyType='next'
                
                />
              </View>
              <View style={{ backgroundColor: "white", width: '98%', height: '50%', flexDirection: 'row', alignContent: 'flex-start' }}>
                <Image source={require('../../../assets/images/key.png')} style={{ width: 25, height: 25,marginLeft: 15,marginTop:10 }} />
                <TextInput
                  placeholder="Password"
                  secureTextEntry={true}
                  value={this.state.password}
                  onChangeText={(text) => this.handlePasswordChange(text)}
                  style={{ width: '65%', height: '100%', marginLeft: 20, }}
                  returnKeyType='done'
                />
              </View>
    
            </View>
            <TouchableOpacity
              style={{ width: '70%', alignItems: 'center', height: 50, justifyContent: 'center', borderRadius: 5, backgroundColor: '#fff',marginTop:50, }}
              onPress={() => this.onPressLogin()}>
              <Text style={{fontSize:18}}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity><Text style={{marginLeft:150,marginTop:3,color:'#fff'}}>Forgot your password?</Text></TouchableOpacity>
    
    
          </View>
        )
      }

    };

    