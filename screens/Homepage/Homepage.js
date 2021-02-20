import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CategoryButton from "../../components/CategoryButton/CategoryButton";
import Header from "../../components/Header/Header";

export default function Homepage() {
  return (
    <View style={styles.container}>
      <Header />
      <CategoryButton title="Mood" />
      <Text>Open up Homepage.js to start working on your app!</Text>
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
