import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useFonts } from "expo-font";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MoodCheckInScreen = () => {
  let [fontsLoaded] = useFonts({
    RobotoMonoItalic: require("../../assets/fonts/RobotoMono-BoldItalic.ttf"),
    RobotoMonoBold: require("../../assets/fonts/RobotoMono-Bold.ttf"),
  });
  const [textInput, setTextInput] = React.useState("");
  var [isPress1, setIsPress1] = React.useState(false);
  var [isPress2, setIsPress2] = React.useState(false);
  var [isPress3, setIsPress3] = React.useState(false);
  var [isPress4, setIsPress4] = React.useState(false);

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
        <View style={styles.container}>
          <Image source={require("../../assets/headerCheckIn.png")} />
          <Text style={styles.title}>Mood</Text>
          <Image
            style={styles.icon}
            source={require("../../assets/moodIcon.png")}
          />
          <TextInput
            placeholder="How are you feeling today?"
            multiline
            value={textInput}
            style={styles.textInput}
            onChangeText={(text) => setTextInput(text)}
          />
          <View style={styles.emotions}>
            <TouchableOpacity onPress={() => setIsPress1(!isPress1)}>
              <MaterialCommunityIcons
                name="emoticon-happy-outline"
                size={75}
                color={isPress1 ? "#9492D9" : "#C8C7EF"}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsPress2(!isPress2)}>
              <MaterialCommunityIcons
                name="emoticon-sad-outline"
                size={75}
                color={isPress2 ? "#9492D9" : "#C8C7EF"}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsPress3(!isPress3)}>
              <MaterialCommunityIcons
                name="emoticon-neutral-outline"
                size={75}
                color={isPress3 ? "#9492D9" : "#C8C7EF"}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsPress4(!isPress4)}>
              <MaterialCommunityIcons
                name="emoticon-angry-outline"
                size={75}
                color={isPress4 ? "#9492D9" : "#C8C7EF"}
              />
            </TouchableOpacity>
          </View>
          <Button title="Update" onPress={() => Alert.alert("hi")} />
        </View>
      </TouchableWithoutFeedback>
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
    // marginTop: 20,
    // fontFamily: "RobotoMonoBold",
    // fontSize: 26,
    // width: "82%",
    // height: "35%",
    // textAlign: "left",
    // position: "relative",
    // color: "#C8C7EF",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
  emotions: {
    flex: 1,
    flexDirection: "row",
    height: 40,
  },
  update: {
    position: "absolute",
    bottom: 40,
    zIndex: 3,
  },
});

export default MoodCheckInScreen;
