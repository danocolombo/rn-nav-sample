import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home";
import Task from "../screens/Task";
import AboutScreen from "../screens/About";
import React from "react";
const Stack = createStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="System Information" component={AboutScreen}/>
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "red",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: "blue",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="Task"
        component={Task}
        options={({ route }) => ({ title: route?.params?.task })}
      />
    </Stack.Navigator>
  );
};
export { HomeStack, AboutStack };
