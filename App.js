import { StatusBar } from "expo-status-bar";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import TrainingRegister from "./src/screens/TrainingRegister";
import Home from "./src/screens/Home";
import React from "react";
import { Routes } from './src/routes'


export default function App() {
  return (
    <>
      <Routes />
      
      <StatusBar style="light" />
    </>
  );
}
