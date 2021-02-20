import React from "react";
import CategoryIcon from "../../components/CategoryIcon/CategoryIcon";
import { StyleSheet, Text, View } from "react-native";

export default function Homepage() {
  return (
    <View style={styles.container}>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
