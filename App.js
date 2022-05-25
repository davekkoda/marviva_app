import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Navigator from "./routes/homeStack";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./screens/Home";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginPage from "./screens/LoginPage";
import SignUp from "./screens/SignUp";
import { StackRouter } from "react-navigation";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
        <Navigator />
      {/* <Home /> */}
      {/* <WelcomeScreen /> */}
      {/* <LoginPage /> */}
      {/* <SignUp /> */}
    </>
  );
}

// const styles = StyleSheet.create({
// });
