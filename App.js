import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MyDrawer from "./routes/MyDrawer";
// import MyStack from "./routes/MyStack";
export default function App() {
  return (
    <NavigationContainer>
      {/*<MyStack />*/}
      <MyDrawer />
    </NavigationContainer>
  );
}
