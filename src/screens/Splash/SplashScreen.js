import React from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import styles from './styles';
import firebase from '../../services/FirebaseConfig';

const Resource = {
  cookie: require('../../../assets/icons/cookie100.png'),
};

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate('RootStackNavigator');
      } else {
        this.props.navigation.navigate('login');
      }
    });
  }

  
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.photo}
          source={require('../../../assets/images/logo.png')}
        />
        <ActivityIndicator
          size="large"
          style={{ position: 'absolute', bottom: '10%' }}
        />
      </View>
    );
  }
}

export default SplashScreen;
