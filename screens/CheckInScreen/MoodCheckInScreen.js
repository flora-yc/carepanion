import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

const MoodCheckInScreen = () => {
  let [fontsLoaded] = useFonts({
    RobotoMono: require("../../assets/fonts/RobotoMono-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Mood</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FF",
    alignItems: "center",
    position: "relative",
    // justifyContent: "center",
  },
  title: {
    marginTop: 90,
    fontFamily: "RobotoMono",
    color: "#9492D9",
    fontSize: 34,
  },
});

export default MoodCheckInScreen;
