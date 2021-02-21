import React from "react";
import { Text, View, StyleSheet, Image, TextInput } from "react-native";
import { useFonts } from "expo-font";

const MoodCheckInScreen = () => {
  let [fontsLoaded] = useFonts({
    RobotoMonoItalic: require("../../assets/fonts/RobotoMono-BoldItalic.ttf"),
  });
  const [value, onChangeText] = React.useState("Placeholder");
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <Image source={require("../../assets/headerCheckIn.png")} />
        <Text style={styles.title}>Mood</Text>
        <Image
          style={styles.icon}
          source={require("../../assets/moodIcon.png")}
        />
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={(text) => onChangeText(text)}
        />
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
    fontFamily: "RobotoMonoItalic",
    color: "#9492D9",
    fontSize: 34,
    position: "absolute",
    top: -20,
    textDecorationLine: "underline",
  },
  icon: {
    opacity: 0.5,
    position: "absolute",
    top: 115,
    width: 45,
    height: 45,
  },
  textInput: {
    marginTop: 30,
    height: 200,
    borderColor: "gray",
    borderWidth: 1,
  },
});

export default MoodCheckInScreen;
