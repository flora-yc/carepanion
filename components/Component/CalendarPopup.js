import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export function CalendarPopup(props) {
    return(
        <View style={styles.button} >
            <Text style={styles.title}>{props.date}</Text>
            <View style={{flex: 1,  flexDirection: 'row', bottom: 30}}>
            <Text style={styles.notTitle}>Mood       </Text> 
            <MaterialCommunityIcons style = {styles.image} name="emoticon-happy-outline" size={40} color="#7271C1"/>
            </View>
            <View style={{flex: 1,  flexDirection: 'row', bottom: 30}}>
            <Text style={styles.waterText}>Water</Text> 
            <MaterialCommunityIcons style = {styles.water} name="water" size={40} color="#7271C1"/>
            <MaterialCommunityIcons style = {styles.water} name="water-outline" size={40} color="#7271C1"/>
            <MaterialCommunityIcons style = {styles.water} name="water-outline" size={40} color="#7271C1"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
    },
    title: {
      top: 15,
      position: "absolute",
      alignItems: "center",
      color: "#9492D9",
      fontFamily: "RobotoMono",
      textAlign: "center",
      width: 88,
      fontSize: 30,

    },
    notTitle: {
        top: 100,
        right: 40,
        color: "#9492D9",
        fontFamily: "RobotoMono",
        textAlign: "center",
        width: 88,
        fontSize: 20,
      },
      waterText: {
          bottom: 40,
          right: 5,
        color: "#9492D9",
        fontFamily: "RobotoMono",
        textAlign: "center",
        width: 88,
        fontSize: 20,
      },
    image: {
      width: 60,
      height: 60,
      top: 90,
      left: 20,
      alignItems: "center",
    },
    water: {
        bottom: 47,
        left: 10,
        alignItems: "center",
      },
    button: {
      alignItems: "center",
      borderWidth: 3,
      padding: 10,
      borderRadius: 10,
      height: 400,
      width: 250,
      bottom: 70,
      backgroundColor: "#FFF", 
      borderWidth: 0
    },
  });