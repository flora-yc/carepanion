import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Homepage from "./screens/Homepage/Homepage";
import MoodCheckInScreen from "./screens/CheckInScreen/MoodCheckInScreen";

export default function App() {
  return (
    <NavigationContainer>
      <MoodCheckInScreen />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
