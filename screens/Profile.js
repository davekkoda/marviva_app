import {
  TextInput,
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";

import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Profile({ navigation }) {

  const pressHome = () => {
    navigation.navigate('Home')
  }

  const pressSignOut = () => {
    navigation.navigate('LoginPage')
  }

  return (
    <>
      <Header />
        <View style={styles.content}>
        <Text style={styles.loginTitle}>Account Details</Text>
          <Image
            style={styles.loginImage}
            source={require("../assets/images/hakkoda.png")}
          />
          <View>
            <Text style={styles.userName}>HakkodaTestUser</Text>
            <Text style={styles.inputLabel}>Change Username</Text>
            <TextInput style={styles.textInput} />
            <Text style={styles.inputLabel}>Change Password</Text>
            <TextInput secureTextEntry style={styles.textInput} />
            <View style={{ height: 50 }} />
            <TouchableOpacity onPress={pressSignOut} activeOpacity={0.75}>
              <View style={styles.loginButton}>
                <Text style={styles.loginLabel}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Footer
        onPressHome={pressHome} />
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#f6f6f6",
    margin: 10,
  },
  loginImage: {
    width: 114.66,
    height: 110,
    borderRadius: 25,
    margin: 10,
    borderWidth: 1,
  },
  loginTitle: {
    marginVertical: 15,
    marginTop: 50,
    fontSize: 34,
    textAlign: "center",
    letterSpacing: 0.374,
  },
  userName: {
    fontSize: 14,
    lineHeight: 15,
    textAlign: 'center',
    marginBottom: 30,
  },
  inputLabel: {
    fontSize: 17,
    textAlign: "center",
    color: "darkgrey",
    marginBottom: 8,
  },
  textInput: {
    borderRadius: 15,
    padding: 20,
    fontSize: 18,
    width: 343,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 25,
    textAlign: "center",
    color: "dodgerblue",
  },
//   pressedItem: {
//     backgroundColor: "#E8E8E8",
//     paddingHorizontal: 50,
//     borderRadius: 15,
//     marginHorizontal: 50,
//     textAlign: "center",
//   },
  signUpLink: {
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: -10,
  },
  loginButton: {
    backgroundColor: "#262626",
    marginBottom: 100,
    padding: 15,
    height: 52,
    width: 344,
    borderRadius: 100,
  },
  loginLabel: {
    color: "#f6f6f6",
    padding: 2,
    textAlign: "center",
    fontSize: 17,
  },
  pressButton: {
    color: "black",
    padding: 50,
  },
});
