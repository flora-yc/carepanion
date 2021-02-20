import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function loadingScreen() {
    let [fontsLoaded] = useFonts({
        RobotoMono: require("../../assets/fonts/RobotoMono.ttf"),
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      } else {
        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={['#6F81C6', '#95A4DC']}
                    style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: '100%'
                }}
                />
                <View style={{position: 'relative', top: -20, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.textNotDate}>carepanion</Text>
                </View>
                <Image source={require('../../assets/loadingScreenLogo.png')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0000",
    alignItems: "center",
    justifyContent: "center",
  },
  textNotDate: {
    color: "#fff",
    fontFamily: "RobotoMono",
    position: "absolute",
    zIndex: 2,
    fontSize: 15,
  },
});



