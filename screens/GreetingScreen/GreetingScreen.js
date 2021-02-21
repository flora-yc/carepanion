import React from "react";
import { Text, View, StyleSheet, Image, TextInput } from "react-native";
import { useFonts } from "expo-font";
import Header from "../../components/Header/Header";
import CategoryButton from "../../components/CategoryButton/CategoryButton";
import CategoryButtonA from "../../components/CategoryButton/CategoryButtonA";
import CategoryButtonS from "../../components/CategoryButton/CategoryButtonS";
import CategoryButtonN from "../../components/CategoryButton/CategoryButtonN";

const GreetingScreen = (props) => {
  let [fontsLoaded] = useFonts({
    RobotoMonoBold: require("../../assets/fonts/RobotoMono-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>What can we help you with?</Text>
        <Image
          style={styles.header}
          source={require("../../assets/headerCheckIn.png")}
        />
        <View style={styles.iconRowOne}>
          <View style={styles.iconWrap}>
            <Text style={styles.text}>General</Text>
            <CategoryButton
              style={styles.icon}
              navigateTo={"HomepageStack"}
              navigation={props.navigation}
            />
          </View>
          <View style={styles.iconWrap}>
            <Text style={styles.text}>Anxiety</Text>
            <CategoryButtonA
              style={styles.icon}
              navigateTo={"HomepageStack"}
              navigation={props.navigation}
            />
          </View>
        </View>
        <View style={styles.iconRowTwo}>
          <View style={styles.iconWrap}>
            <Text style={styles.text}>Self Esteem</Text>
            <CategoryButtonS
              style={styles.icon}
              navigateTo={"HomepageStack"}
              navigation={props.navigation}
            />
          </View>
          <View style={styles.iconWrap}>
            <Text style={styles.text}>Negativity</Text>
            <CategoryButtonN
              style={styles.icon}
              navigateTo={"HomepageStack"}
              navigation={props.navigation}
            />
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "28%",
    zIndex: 2,
  },
  textTitle: {
    color: "#7271C1",
    fontFamily: "RobotoMonoBold",
    position: "absolute",
    fontSize: 25,
    bottom: "78%",
    left: 50,
    width: "60%",
    zIndex: 3,
  },
  container: {
    height: "100%",
    backgroundColor: "#F6F7FF",
    alignItems: "center",
  },
  iconRowOne: {
    marginTop: "20%",
    flex: 1,
    flexDirection: "row",
    width: "80%",
    alignItems: "stretch",
    justifyContent: "space-around",
  },
  iconRowTwo: {
    marginTop: "-30%",
    flex: 1,
    flexDirection: "row",
    width: "80%",
    alignItems: "stretch",
    justifyContent: "space-around",
  },
  iconWrap: {
    alignItems: "center",
    width: "40%",
  },
  text: {
    fontFamily: "RobotoMonoBold",
    color: "#7271C1",
    fontSize: 20,
    position: "absolute",
    top: -6,
  },
});

export default GreetingScreen;
