import React from "react";
import { globalStyles } from "../styles/global";
import { View, Button, Text } from "react-native";
const Task = ({ navigation, route }) => {
  const popHandler = () => {
    navigation.pop();
  };
  const pushHandler = () => {
    navigation.push("Home");
  };
  return (
    <View style={globalStyles.container}>
      <Text>Task Screen</Text>
      <Text>{String(route?.params?.done)}</Text>
      <Text>{route?.params?.task}</Text>
      <Button title="go to home POP" onPress={popHandler} />
      <Text>Task</Text>
      { /*<Button title="go to home PUSH" onPress={pushHandler} /> */ }
    </View>
  );
};

export default Task;
