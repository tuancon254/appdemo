import React from 'react';
import { StyleSheet,View } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
  }

componentDidMount(){
    setInterval(() => {
        console.log('====================================');
        console.log("Chuyển đến login sau 7s");
        console.log('====================================');
    }, 7000);
    
}
  render() {
    return (
      <AnimatedLoader
        visible={true}
        overlayColor="rgba(196,240,234)"
        source={require("../../../assets/images/lf30_editor_pMEYKf.json")}
        animationStyle={styles.lottie}
        speed={0.3}
        loop={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  lottie: {
    width: 250,
    height: 250
  }
});