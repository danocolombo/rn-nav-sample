import React, { useState } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { globalStyles } from "../styles/global";
const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([
    { task: "HTML I", done: true, id: "1" },
    { task: "CSS", done: true, id: "2" },
    { task: "Responsive design", done: true, id: "3" },
  ]);
  const pressHandler = () => {
    navigation.push("Task");
  };
  return (
    <View style={globalStyles.container}>
      {/*<Text>Home</Text>*/}
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Task", item)}>
            <Text>{item.task}</Text>
          </TouchableOpacity>
        )}
      />
      { /*<Button title="go to Task" onPress={pressHandler} /> */ }
    </View>
  );
};

export default HomeScreen;
