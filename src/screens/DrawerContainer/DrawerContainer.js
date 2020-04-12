import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';

export default class DrawerContainer extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.content}>
        <View style={styles.container}>
          <MenuButton
            title="Trang chủ"
            source={require('../../../assets/images/house.png')}
            onPress={() => {
              navigation.navigate('Home');
              navigation.closeDrawer();
            }}
          />
        
          <MenuButton
            title="Hồ sơ"
            source={require('../../../assets/images/user.png')}
            onPress={() => {
              navigation.navigate('TestResultScreens');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Đổi mật khẩu"
            source={require('../../../assets/images/padlock.png')}
            onPress={() => {
              navigation.navigate('changePassword');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Đăng Xuất"
            source={require('../../../assets/images/logout.png')}
            onPress={() => {
              navigation.navigate('SignOut');
              navigation.closeDrawer();
            }}
          />
        </View>
      </View>
    );
  }
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};
