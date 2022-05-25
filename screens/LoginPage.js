import {
  TextInput,
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";

export default function WelcomeScreen({ navigation }) {

  const pressSignUp = () => {
    navigation.navigate('SignUp')
  }

  const pressLogIn = () => {
    navigation.navigate('Home')
  }

  return (
    <>
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        <View style={styles.content}>
          <Image
            style={styles.loginImage}
            source={require("../assets/images/marviva.jpeg")}
          />
          <View>
            <Text style={styles.loginTitle}>Login Page</Text>
            <Text style={styles.loginDesc}>Log into the MarViva App</Text>
            <Text style={styles.inputLabel}>Username</Text>
            <TextInput style={styles.textInput} />
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput secureTextEntry style={styles.textInput} />
            <TouchableOpacity onPress={pressSignUp}>
                    <Text style={styles.signUpLink}>
                        Click here for Sign Up
                    </Text>
            </TouchableOpacity>
            <View style={{ height: 100 }} />
            <TouchableOpacity onPress={pressLogIn} activeOpacity={0.75}>
              <View style={styles.loginButton}>
                <Text style={styles.loginLabel}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      {/* </TouchableWithoutFeedback> */}
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    backgroundColor: "#f6f6f6",
  },
  loginImage: {
    width: 114.66,
    height: 109.68,
    shadowOpacity: 10,
    borderRadius: 20,
    borderWidth: 1,
  },
  loginTitle: {
    marginVertical: 15,
    fontSize: 34,
    textAlign: "center",
    letterSpacing: 0.374,
  },
  loginDesc: {
    marginVertical: 15,
    fontSize: 17,
    lineHeight: 22,
    textAlign: "center",
    letterSpacing: -0.208,
    marginBottom: 50,
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
  pressedItem: {
    backgroundColor: "#E8E8E8",
    paddingHorizontal: 50,
    borderRadius: 15,
    marginHorizontal: 50,
    textAlign: "center",
  },
  signUpLink: {
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: -10,
  },
  loginButton: {
    backgroundColor: "#262626",
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
