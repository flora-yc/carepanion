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
  ScrollView,
  Dimensions,
} from "react-native";
import { useFonts } from "expo-font";
import {
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";

const WaterCheckInScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    RobotoMonoItalic: require("../../assets/fonts/RobotoMono-BoldItalic.ttf"),
    RobotoMonoBold: require("../../assets/fonts/RobotoMono-Bold.ttf"),
  });
  const [textInput, setTextInput] = React.useState("");
  var [isPress1, setIsPress1] = React.useState(false);
  var [isPress2, setIsPress2] = React.useState(false);
  var [isPress3, setIsPress3] = React.useState(false);
  var [isPress4, setIsPress4] = React.useState(false);
  var [isPress5, setIsPress5] = React.useState(false);
  var [isPress6, setIsPress6] = React.useState(false);

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <ScrollView
        keyboardShouldPersistTaps={"handled"}
        contentContainerStyle={styles.scroll}
        style={styles.container}
      >
        <Image
          style={{ top: -290 }}
          source={require("../../assets/headerCheckIn.png")}
        />
        <TouchableOpacity
          style={{ position: "absolute", top: 40, left: 25 }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={25} color={"#9492D9"} />
        </TouchableOpacity>
        <Text style={styles.title}>Water</Text>
        <Ionicons
          style={styles.icon}
          name="ios-water"
          size={40}
          color={"#9492D9"}
        />
        <TextInput
          multiline
          value={textInput}
          style={styles.textInput}
          onChangeText={(text) => setTextInput(text)}
          placeholderTextColor="#C8C7EF"
          placeholder="How are you staying hydrated today?"
        />
        <View style={styles.emotions}>
          <TouchableOpacity onPress={() => setIsPress1(!isPress1)}>
            <Ionicons
              name="ios-water"
              size={50}
              color={isPress1 ? "#9492D9" : "#C8C7EF"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsPress2(!isPress2)}>
            <Ionicons
              name="ios-water"
              size={50}
              color={isPress2 ? "#9492D9" : "#C8C7EF"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsPress3(!isPress3)}>
            <Ionicons
              name="ios-water"
              size={50}
              color={isPress3 ? "#9492D9" : "#C8C7EF"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsPress4(!isPress4)}>
            <Ionicons
              name="ios-water"
              size={50}
              color={isPress4 ? "#9492D9" : "#C8C7EF"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsPress5(!isPress5)}>
            <Ionicons
              name="ios-water"
              size={50}
              color={isPress5 ? "#9492D9" : "#C8C7EF"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsPress6(!isPress6)}>
            <Ionicons
              name="ios-water"
              size={50}
              color={isPress6 ? "#9492D9" : "#C8C7EF"}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.update}
          onPress={() => navigation.goBack()}
        >
          <Text
            style={{
              fontFamily: "RobotoMonoBold",
              fontSize: 24,
              color: "#9492D9",
            }}
          >
            Update
          </Text>
        </TouchableOpacity>
        {/* <Button
          styles={styles.update}
          title="Update"
          onPress={() => Alert.alert("hi")}
        /> */}
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F7FF",
    position: "relative",
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
    // width: 45,
    // height: 45,
  },
  textInput: {
    fontFamily: "RobotoMonoBold",
    fontSize: 26,
    width: "82%",
    height: "80%",
    textAlign: "left",
    color: "#9492D9",
    position: "absolute",
    bottom: -48,
  },
  emotions: {
    flexDirection: "row",
    top: 50,
  },
  update: {
    position: "absolute",
    backgroundColor: "#FFF",
    bottom: 150,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderWidth: 3,
    borderColor: "#E9EBFC",
    borderRadius: 15,
  },
  scroll: {
    backgroundColor: "#F6F7FF",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WaterCheckInScreen;
