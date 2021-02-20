import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Homepage from "./screens/Homepage/Homepage";

export default function App() {
  return (
    <NavigationContainer>
      <Homepage />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}