import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  AsyncImageAnimated,
  Image,
  TouchableHighlight
} from "react-native";
import styles from "./styles";

const Resource = {
  cookie: require("../../../assets/icons/cookie100.png"),
}

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.photo}
          source={Resource.cookie}
        />
      </View>
    );
  }
}

export default SplashScreen