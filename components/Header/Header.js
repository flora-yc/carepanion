import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import moment from "moment";
import { useFonts } from "expo-font";

function Header() {
  var today = moment().format("MMMM Do, yyyy");
  let [fontsLoaded] = useFonts({
    RobotoMono: require("../../assets/fonts/RobotoMono-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Image source={require("../../assets/headerLarger.png")} />
        <Text style={styles.textNotDate}>Today is</Text>
        <Text style={styles.textDate}>{today}</Text>
        <Text style={styles.textMotivation}>You're doing great!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  textNotDate: {
    color: "#9492D9",
    fontFamily: "RobotoMono",
    position: "absolute",
    fontSize: 30,
    bottom: 140,
    left: 40,
  },
  textDate: {
    color: "#7271C1",
    fontFamily: "RobotoMono",
    position: "absolute",
    fontSize: 30,
    bottom: 75,
    left: 40,
    width: "70%",
  },
  textMotivation: {
    color: "#47476D",
    fontFamily: "RobotoMono",
    position: "absolute",
    fontSize: 16,
    bottom: 55,
    left: 40,
  },
});

export default Header;
