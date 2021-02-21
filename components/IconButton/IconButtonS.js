import React from "react";
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import {
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";

function IconButtonS(props) {
  let [fontsLoaded] = useFonts({
    RobotoMono: require("../../assets/fonts/RobotoMono-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View styles={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate(props.navigateTo)}
        >
          <MaterialCommunityIcons
            style={styles.image}
            name="power-sleep"
            size={60}
            color={"#9492D9"}
          />
          {/* <Image
            style={styles.image}
            source={require("../../assets/sleepIcon.png")}
          /> */}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  title: {
    color: "#9492D9",
    fontFamily: "RobotoMono",
    textAlign: "center",
    width: 88,
    fontSize: 17,
  },
  image: {
    width: 60,
    height: 60,
    paddingLeft: 4,
    paddingTop: 1,
  },
  button: {
    borderWidth: 3,
    padding: 10,
    borderRadius: 10,
    width: 88,
    borderColor: "#E9EBFC",
  },
});

export default IconButtonS;