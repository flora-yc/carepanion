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
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default function CalendarScreen() {

  const [actionTriggered, setActionTriggered] = useState(''); 
  const [isModalVisible, setModalVisible] = useState(false);
  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

    return(
        <View style={styles.container}>
            <Header />
            <AntDesign style = {{bottom: 30}}name="calendar" size={60} color="#7271C1" />
            <Calendar onDayPress={() => {
        setActionTriggered('ACTION_1');
        setModalVisible(true);
        toggleModal}}
  backgroundColor= "#E5E5E5"
  calendarBackground = '#E5E5E5'
  arrowColor = '#E5E5E5'
/>
         <Modal isVisible={isModalVisible} style = {{top: 300}}>

         {actionTriggered === 'ACTION_1' ?
             <View style={{flex: 1, alignItems: 'center', position: 'center'}}>
               <CalendarPopup date="Hi"/>
               <Button title="Hide" onPress={toggleModal}  color="#fff" style={styles.button}/>
             </View> : null}
      </Modal>
      <TouchableOpacity style = {{  position: "absolute", top: 40, left: 25}}>
      <AntDesign name="arrowleft" size={25} color="#9492D9" /> 
        </TouchableOpacity>
      </View>

    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F6F7FF",
      alignItems: 'center',
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
  
  