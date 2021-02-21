import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import moment from "moment";
import CategoryIcon from "../../components/CategoryIcon/CategoryIcon";
import CategoryButton from "../../components/CategoryButton/CategoryButton";
import Header from "../../components/Header/Header";
import {CalendarDate, CalendarDateToday} from "../../components/Component/CalendarDate.js";
import {CalendarPopup} from "../../components/Component/CalendarPopup.js";
import { AntDesign } from '@expo/vector-icons'; 
import Modal from 'react-native-modal';

export default function CalendarScreen() {
    return(
        <View style={styles.container}>
            <Header />
            
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F6F7FF",
      alignItems: 'stretch'
      // alignItems: "center",
      // justifyContent: "center",
    },
    button: {
      bottom: 150,
      alignItems: "center",
      justifyContent: "center",
    },
    rectangle: {
      width: 50 * 2,
      height: 35,
      backgroundColor: "#FFFFFF",
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#D4DCFA',
      left: 0.5
    },
    textNotDate: {
      color: "#fff",
      fontFamily: "RobotoMono",
      position: "absolute",
      zIndex: 2,
      fontSize: 15,
      top: -15
    },
  });
  
  