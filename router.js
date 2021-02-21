import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GreetingScreen from "./screens/GreetingScreen/GreetingScreen";
import Homepage from "./screens/Homepage/Homepage";
import CalendarScreen from "./screens/CalendarScreen/CalendarScreen";
import MoodCheckInScreen from "./screens/CheckInScreen/MoodCheckInScreen";


function HomepageStackScreen() {
  const HomepageStack = createStackNavigator();
  
  return (
    <HomepageStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomepageStack.Screen
        name="Homepage"
        component={ Homepage }
        options={{ title: "Homepage" }}
      />
      <HomepageStack.Screen
        name="Calendar"
        component={ CalendarScreen }
        options={{ title: "Calendar" }}
      />
      <HomepageStack.Screen
        name="MoodCheckIn"
        component={ MoodCheckInScreen }
        options={{ title: "Mood Check In" }}
      />
    </HomepageStack.Navigator>
  );
}

const AppStack = createStackNavigator();

export default function Router({ token }) {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen
        name="Greeting"
        component={ GreetingScreen }
        options={{ title: "Greeting" }}
      />
      <AppStack.Screen
        name="HomepageStack"
        component={ HomepageStackScreen }
        options={{ title: "Homepage" }}
      />
    </AppStack.Navigator>
  );
}