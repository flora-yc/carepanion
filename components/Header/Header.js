import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

function Header() {
  let [fontsLoaded] = useFonts({
    RobotoMono: require("../../assets/fonts/RobotoMono.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Image source={require("../../assets/headerLarger.png")} />
        <Text style={styles.textNotDate}>Hello</Text>
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
    zIndex: 2,
    fontSize: 30,
  },
});

export default Header;
