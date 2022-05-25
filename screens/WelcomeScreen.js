import { ImageBackground, StyleSheet, View } from "react-native";
import React from "react";

export default function WelcomeScreen() {
  return (
    <>
      <View style={styles.underBackground} />
      <ImageBackground
        style={styles.background}
        source={require("../assets/images/marviva.jpeg")}
      />
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: "20%",
    width: 429,
    height: 465,
  },
  underBackground: {
    backgroundColor: "#1C3F91",
    top: "60%",
    width: 429,
    height: 100,
    shadowColor: "black",
    shadowRadius: 20,
    shadowOpacity: 10,
  },
});
