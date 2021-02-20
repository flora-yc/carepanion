import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function CalendarDate(props) {
    return ( 
    <View style={{
        width: 53,
        height: 53,
        justifyContent: "center",
        borderRadius: 53 / 2,
        borderWidth: 2,
        borderColor: '#D4DCFA',
      }}>
        <Text style={{
          alignSelf: 'center',
          fontWeight: 'bold',
          color: '#50506A',
          fontSize: 15,
        }}>{props.dayOfTheWeek}</Text>
        <Text style={{
          alignSelf: 'center',
          fontWeight: 'bold',
          color: '#50506A',
          fontSize: 15,
        }}>{props.number}</Text>
      </View>
    );
};


export function CalendarDateToday(props) {

    return ( 
    <View style={{
        width: 53,
        height: 53,
        justifyContent: "center",
        borderRadius: 53 / 2,
        backgroundColor: '#D4DCFA'
      }}>
        <Text style={{
          alignSelf: 'center',
          fontWeight: 'bold',
          color: '#9492D9',
          fontSize: 15,
        }}>{props.dayOfTheWeek}</Text>
        <Text style={{
          alignSelf: 'center',
          fontWeight: 'bold',
          color: '#50506A',
          fontSize: 15,
        }}>{props.number}</Text>
      </View>
    );


};