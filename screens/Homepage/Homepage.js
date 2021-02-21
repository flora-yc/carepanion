import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import moment from "moment";
import CategoryIcon from "../../components/CategoryIcon/CategoryIcon";
import CategoryButton from "../../components/CategoryButton/CategoryButton";
import Header from "../../components/Header/Header";
import {
  CalendarDate,
  CalendarDateToday,
} from "../../components/Component/CalendarDate.js";
import { CalendarPopup } from "../../components/Component/CalendarPopup.js";
import { AntDesign } from "@expo/vector-icons";
import Modal from "react-native-modal";

export default function Homepage(props) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  var dayOne = moment().subtract(3, "day").format("ddd");
  var dayOneNum = moment().subtract(3, "day").format("D");
  var dayTwo = moment().subtract(2, "day").format("ddd");
  var dayTwoNum = moment().subtract(2, "day").format("D");
  var dayThree = moment().subtract(1, "day").format("ddd");
  var dayThreeNum = moment().subtract(1, "day").format("D");
  var weekdayName = moment().format("ddd");
  var weekdayNameNum = moment().format("D");
  var dayFive = moment().add(1, "day").format("ddd");
  var dayFiveNum = moment().add(1, "day").format("D");
  var daySix = moment().add(2, "day").format("ddd");
  var daySixNum = moment().add(2, "day").format("D");
  var daySeven = moment().add(3, "day").format("ddd");
  var daySevenNum = moment().add(3, "day").format("D");
  const [actionTriggered, setActionTriggered] = useState("");

  return (
    <View style={styles.container}>
      <Header />
      <TouchableOpacity onPress={() => props.navigation.navigate("Calendar")}>
        <AntDesign
          style={{ bottom: 35, marginLeft: 10 }}
          name="calendar"
          size={40}
          color="#7271C1"
        />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          bottom: 30,
          marginLeft: 10,
          marginRight: 10,
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setActionTriggered("ACTION_1");
            setModalVisible(true);
            toggleModal;
          }}
        >
          <CalendarDate dayOfTheWeek={dayOne} number={dayOneNum} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setActionTriggered("ACTION_2");
            setModalVisible(true);
          }}
        >
          <CalendarDate dayOfTheWeek={dayTwo} number={dayTwoNum} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setActionTriggered("ACTION_3");
            setModalVisible(true);
          }}
        >
          <CalendarDate dayOfTheWeek={dayThree} number={dayThreeNum} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setActionTriggered("ACTION_4");
            setModalVisible(true);
          }}
        >
          <CalendarDateToday
            dayOfTheWeek={weekdayName}
            number={weekdayNameNum}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setActionTriggered("ACTION_5");
            setModalVisible(true);
          }}
        >
          <CalendarDate dayOfTheWeek={dayFive} number={dayFiveNum} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setActionTriggered("ACTION_6");
            setModalVisible(true);
          }}
        >
          <CalendarDate dayOfTheWeek={daySix} number={daySixNum} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setActionTriggered("ACTION_7");
            setModalVisible(true);
          }}
        >
          <CalendarDate dayOfTheWeek={daySeven} number={daySevenNum} />
        </TouchableOpacity>

        <Modal isVisible={isModalVisible} style={{ top: 300 }}>
          {actionTriggered === "ACTION_1" ? (
            <View style={{ flex: 1, alignItems: "center", position: "center" }}>
              <CalendarPopup date={dayOne} />
              <Button
                title="Hide"
                onPress={toggleModal}
                color="#fff"
                style={styles.button}
              />
            </View>
          ) : actionTriggered === "ACTION_2" ? (
            <View style={{ flex: 1, alignItems: "center", position: "center" }}>
              <CalendarPopup date={dayTwo} />
              <Text style={styles.textNotDate}>{dayTwo}</Text>
              <Button title="Hide" onPress={toggleModal} color="#fff" />
            </View>
          ) : actionTriggered === "ACTION_3" ? (
            <View style={{ flex: 1, alignItems: "center", position: "center" }}>
              <CalendarPopup date={dayThree} />
              <Text style={styles.textNotDate}>{dayThree}</Text>
              <Button title="Hide" onPress={toggleModal} color="#fff" />
            </View>
          ) : actionTriggered === "ACTION_4" ? (
            <View style={{ flex: 1, alignItems: "center", position: "center" }}>
              <CalendarPopup date={weekdayName} />
              <Text style={styles.textNotDate}>{weekdayName}</Text>
              <Button title="Hide" onPress={toggleModal} color="#fff" />
            </View>
          ) : actionTriggered === "ACTION_5" ? (
            <View style={{ flex: 1, alignItems: "center", position: "center" }}>
              <CalendarPopup date={dayFive} />
              <Text style={styles.textNotDate}>{dayFive}</Text>
              <Button title="Hide" onPress={toggleModal} color="#fff" />
            </View>
          ) : actionTriggered === "ACTION_6" ? (
            <View style={{ flex: 1, alignItems: "center", position: "center" }}>
              <CalendarPopup date={daySix} />
              <Text style={styles.textNotDate}>{daySix}</Text>
              <Button title="Hide" onPress={toggleModal} color="#fff" />
            </View>
          ) : actionTriggered === "ACTION_7" ? (
            <View style={{ flex: 1, alignItems: "center", position: "center" }}>
              <CalendarPopup date={daySeven} />
              <Text style={styles.textNotDate}>{daySeven}</Text>
              <Button title="Hide" onPress={toggleModal} color="#fff" />
            </View>
          ) : null}
        </Modal>
      </View>

      {/* ICON CONTAINERS */}
      <View style={styles.iconContainer}>
        <View style={styles.iconRow}>
          <View style={styles.iconWrap}>
            <Text style={styles.iconText}>Water</Text>
            <CategoryButton
              imgName={"waterIcon.png"}
              navigateTo={"MoodCheckIn"}
              navigation={props.navigation}
            />
          </View>
          <View style={styles.iconWrap}>
            <Text style={styles.iconText}>Exercise</Text>
            <CategoryButton
              imgName={"exerciseIcon.png"}
              navigateTo={"MoodCheckIn"}
              navigation={props.navigation}
            />
          </View>
        </View>
        <View style={styles.iconRow}>
          <View style={styles.iconWrap}>
            <Text style={styles.iconText}>Sleep</Text>
            <CategoryButton
              imgName={"sleepIcon.png"}
              navigateTo={"MoodCheckIn"}
              navigation={props.navigation}
            />
          </View>
          <View style={styles.iconWrap}>
            <Text style={styles.iconText}>Mood</Text>
            <CategoryButton
              imgName={"moodIcon.png"}
              navigateTo={"MoodCheckIn"}
              navigation={props.navigation}
            />
          </View>
        </View>
        <View style={styles.iconRow}>
          <View style={styles.iconWrap}>
            <Text style={styles.iconText}>Medication</Text>
            <CategoryButton
              imgName={"medication.png"}
              navigateTo={"MoodCheckIn"}
              navigation={props.navigation}
            />
          </View>
          <View style={styles.iconWrap}>
            <Text style={styles.iconText}>Break</Text>
            <CategoryButton
              imgName={"breakIcon.png"}
              navigateTo={"MoodCheckIn"}
              navigation={props.navigation}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FF",
    alignItems: "stretch",
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
    borderColor: "#D4DCFA",
    left: 0.5,
  },
  textNotDate: {
    color: "#fff",
    fontFamily: "RobotoMono",
    position: "absolute",
    zIndex: 2,
    fontSize: 15,
    top: -15,
  },

  // ICON STYLES
  iconContainer: {
    width: "100%",
    height: "45%",
    alignItems: "center",
    bottom: 90,
  },
  iconRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-around",
  },
  iconWrap: {
    alignItems: "center",
    width: "40%",
  },
  iconText: {
    fontFamily: "RobotoMono",
    color: "#9492D9",
    fontSize: 15,
    position: "absolute",
    top: -8,
  },
  iconButton: {
    borderWidth: 3,
    padding: 10,
    borderRadius: 10,
    width: 88,
    borderColor: "#E9EBFC",
  },
});
