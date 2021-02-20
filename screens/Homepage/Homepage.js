import React, {useState} from 'react';
import {  Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import moment from "moment";
import CategoryIcon from "../../components/CategoryIcon/CategoryIcon";
import Header from "../../components/Header/Header";
import {CalendarDate, CalendarDateToday} from "../../components/Component/CalendarDate.js";
import { AntDesign } from '@expo/vector-icons'; 
import Modal from 'react-native-modal';

export default function Homepage() {
  const [isModalVisible, setModalVisible] = useState(false);
  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  var dayOne = moment().subtract(3, 'day').format('ddd');
  var dayOneNum = moment().subtract(3, 'day').format('D');
  var dayTwo = moment().subtract(2, 'day').format('ddd');
  var dayTwoNum = moment().subtract(2, 'day').format('D');
  var dayThree = moment().subtract(1, 'day').format('ddd');
  var dayThreeNum = moment().subtract(1, 'day').format('D');
  var weekdayName = moment().format('ddd');
  var weekdayNameNum = moment().format('D');
  var dayFive = moment().add(1, 'day').format('ddd');
  var dayFiveNum = moment().add(1, 'day').format('D');
  var daySix = moment().add(2, 'day').format('ddd');
  var daySixNum = moment().add(2, 'day').format('D');
  var daySeven = moment().add(3, 'day').format('ddd');
  var daySevenNum = moment().add(3, 'day').format('D');
  const [actionTriggered, setActionTriggered] = useState(''); 

  return (
    <View style={styles.container}>
      <Header />
      <AntDesign style = {{bottom: 30, left: 5}}name="calendar" size={40} color="#7271C1"/>
      <View style={{flex: 1,  flexDirection: 'row', bottom: 30}}>

      <TouchableOpacity  onPress={() => {
        setActionTriggered('ACTION_1');
        setModalVisible(true);
        toggleModal}}>
        <CalendarDate dayOfTheWeek = {dayOne} number = {dayOneNum}/>
      </TouchableOpacity >


      <TouchableOpacity  onPress={() => {
        setActionTriggered('ACTION_2');
        setModalVisible(true);}}>
      <CalendarDate dayOfTheWeek = {dayTwo} number = {dayTwoNum}/>
      </TouchableOpacity >


      <TouchableOpacity onPress={() => {
        setActionTriggered('ACTION_3');
        setModalVisible(true);}}>
      <CalendarDate dayOfTheWeek = {dayThree} number = {dayThreeNum}/>
      </TouchableOpacity>


      <TouchableOpacity  onPress={() => {
        setActionTriggered('ACTION_4');
        setModalVisible(true);}}>
      <CalendarDateToday dayOfTheWeek = {weekdayName} number = {weekdayNameNum}/>
      </TouchableOpacity>


      <TouchableOpacity  onPress={() => {
        setActionTriggered('ACTION_5');
        setModalVisible(true);}}>
      <CalendarDate dayOfTheWeek = {dayFive} number = {dayFiveNum}/>
      </TouchableOpacity>


      <TouchableOpacity  onPress={() => {
        setActionTriggered('ACTION_6');
        setModalVisible(true);}}>
      <CalendarDate dayOfTheWeek = {daySix} number = {daySixNum}/>
      </TouchableOpacity>


      <TouchableOpacity  onPress={() => {
        setActionTriggered('ACTION_7');
        setModalVisible(true);}}>
      <CalendarDate dayOfTheWeek = {daySeven} number = {daySevenNum}/>
      </TouchableOpacity>


      <Modal isVisible={isModalVisible} style = {{top: 300}}>

      {actionTriggered === 'ACTION_1' ?
          <View style={{flex: 1, alignItems: 'center', position: 'center'}}>
          <Text style={styles.textNotDate}>{dayOne}</Text>
            <Button title="Hide modal" onPress={toggleModal} />
          </View> :
          actionTriggered === 'ACTION_2' ?
          <View style={{flex: 1, alignItems: 'center', position: 'center'}}>
          <Text style={styles.textNotDate}>{dayTwo}</Text>
            <Button title="Hide modal" onPress={toggleModal} />
          </View> :
          actionTriggered === 'ACTION_3' ?
          <View style={{flex: 1, alignItems: 'center', position: 'center'}}>
          <Text style={styles.textNotDate}>{dayThree}</Text>
            <Button title="Hide modal" onPress={toggleModal} />
          </View> :
          actionTriggered === 'ACTION_4' ?
          <View style={{flex: 1, alignItems: 'center', position: 'center'}}>
          <Text style={styles.textNotDate}>{weekdayName}</Text>
            <Button title="Hide modal" onPress={toggleModal} />
          </View> :
          actionTriggered === 'ACTION_5' ?
          <View style={{flex: 1, alignItems: 'center', position: 'center'}}>
          <Text style={styles.textNotDate}>{dayFive}</Text>
            <Button title="Hide modal" onPress={toggleModal} />
          </View> :
          actionTriggered === 'ACTION_6' ?
          <View style={{flex: 1, alignItems: 'center', position: 'center'}}>
          <Text style={styles.textNotDate}>{daySix}</Text>
            <Button title="Hide modal" onPress={toggleModal} />
          </View> :
          actionTriggered === 'ACTION_7' ?
          <View style={{flex: 1, alignItems: 'center', position: 'center'}}>
          <Text style={styles.textNotDate}>{daySeven}</Text>
            <Button title="Hide modal" onPress={toggleModal} />
          </View> :

            null}
      </Modal>

      </View>
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
    alignItems: 'stretch'
    // alignItems: "center",
    // justifyContent: "center",
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

