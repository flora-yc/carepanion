import React from "react";
import { StyleSheet, Text, View } from "react-native";

import CategoryIcon from "../../components/CategoryIcon/CategoryIcon";
import Header from "../../components/Header/Header";

export default function Homepage() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Open up Homepage.js to start working on your app!</Text>
      <CategoryIcon src="sleepIcon.png" />
      <CategoryIcon src="breakIcon.png" />
      <CategoryIcon src="generalIcon.png" />
      <CategoryIcon src="medication.png" />
      <CategoryIcon src="negativity.png" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FF",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
