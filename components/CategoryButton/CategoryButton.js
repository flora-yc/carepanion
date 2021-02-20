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

function CategoryButton(props) {
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
          onPress={() => navigation.navigate("MoodCheckInScreen")}
        >
          <Image
            style={styles.image}
            source={require("../../assets/moodIcon.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
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
    alignItems: "center",
  },
  button: {
    borderWidth: 3,
    padding: 10,
    borderRadius: 10,
    width: 88,
    borderColor: "#E9EBFC",
  },
});

export default CategoryButton;
