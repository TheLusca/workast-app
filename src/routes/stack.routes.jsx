import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

export const { Screen, Navigator } = createNativeStackNavigator();

import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import TrainingCard from "../screens/TrainingCard";
import TrainingRegister from "../screens/TrainingRegister";


export function StackRoutes() {
  return (
    <Navigator>
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="Home" component={Home} />
      <Screen name="TrainingCard" component={TrainingCard} />
      <Screen name="TrainingRegister" component={TrainingRegister} />
    </Navigator>
  );
}
