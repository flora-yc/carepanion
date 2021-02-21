import React from 'react';
import { Text, View, StyleSheet, Image, TextInput } from "react-native";
import { useFonts } from "expo-font";
import Header from "../../components/Header/Header"
import CategoryButton from "../../components/CategoryButton/CategoryButton"

const GreetingScreen = () => {
    let [fontsLoaded] = useFonts({
        RobotoMonoItalic: require("../../assets/fonts/RobotoMono-BoldItalic.ttf"),
    });
    const [value, onChangeText] = React.useState("Placeholder");
    if (!fontsLoaded) {
        return null;
    } else {
        return (
            <View style={styles.container}>
                    <Text style={styles.textTitle}>What can we help you with?</Text>
                    <Image style={styles.header} source={require("../../assets/headerCheckIn.png")} />
                    <View style={styles.iconRowOne}>
                        <View style={styles.iconWrap}>
                            <Text style={styles.text}>General</Text>
                            <CategoryButton
                            style={styles.icon}
                            imgName={"generalIcon.png"}
                            navigateTo={"@TODO-CHRISTINE"}
                            />  
                        </View>
                        <View style={styles.iconWrap}>
                            <Text style={styles.text}>Anxiety</Text>
                            <CategoryButton
                            style={styles.icon}
                            imgName={"anxietyIcon.png"}
                            navigateTo={"@TODO-CHRISTINE"}
                            />  
                        </View>
                    </View>
                    <View style={styles.iconRowTwo}>
                        <View style={styles.iconWrap}>
                            <Text style={styles.text}>Self Esteem</Text>
                            <CategoryButton
                            style={styles.icon}
                            imgName={"selfEsteem.png"}
                            navigateTo={"@TODO-CHRISTINE"}
                            />  
                        </View>
                        <View style={styles.iconWrap}>
                            <Text style={styles.text}>Negativity</Text>
                            <CategoryButton
                            style={styles.icon}
                            imgName={"negativityIcon.png"}
                            navigateTo={"@TODO-CHRISTINE"}
                            />  
                        </View>
                    </View>    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "28%",
        zIndex: 2
    },
    textTitle: {
        color: "#7271C1",
        fontFamily: "RobotoMono",
        position: "absolute",
        fontSize: 25,
        bottom: '78%',
        left: 50,
        width: "70%",
        zIndex: 3
    },
    container: {
        height: "100%",
        backgroundColor: "#F6F7FF",
        alignItems: "center",
    },
    iconRowOne: {
        marginTop: "20%",
        flex: 1,
        flexDirection: "row",
        width: "80%",
        alignItems: 'stretch',
        justifyContent: 'space-around'
    },
    iconRowTwo: {
        marginTop: "-30%",
        flex: 1,
        flexDirection: "row",
        width: "80%",
        alignItems: 'stretch',
        justifyContent: 'space-around'
    },
    iconWrap: {
        alignItems: "center",
        width: "40%"
    },
    text: {
        fontFamily: "RobotoMono",
        color: "#9492D9",
        fontSize: 15,
        position: "absolute",
        top: -22,
    },
});

export default GreetingScreen;