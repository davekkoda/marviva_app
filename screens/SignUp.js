import {
  TextInput,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";

export default function SignUp({ navigation }) {

  const buttonLogin = () => {
    navigation.navigate('LoginPage')
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.content}>
          <View>
            <Text style={styles.loginTitle}>Sign Up Page</Text>
            <Text style={styles.loginDesc}>Sign up for an Account</Text>
            <Text style={styles.inputLabel}>Username</Text>
            <TextInput style={styles.textInput} />
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput style={styles.textInput} />
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput secureTextEntry style={styles.textInput} />
            <Text style={styles.inputLabel}>Confirm Password</Text>
            <TextInput secureTextEntry style={styles.textInput} />
            <View style={{ height: 100 }} />
            <TouchableOpacity onPress={buttonLogin} activeOpacity={0.75}>
              <View style={styles.loginButton}>
                <Text style={styles.loginLabel}>Sign Up</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={buttonLogin} activeOpacity={0.6}>
              <View style={styles.backButton}>
                <Text style={styles.loginLabel}>&#60; Back</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    backgroundColor: "#262626",
    padding: 10,
    top: -705,
    left: -20,
    height: 45,
    width: 100,
    borderRadius: 30,
  },
  content: {
    flex: 1,
    marginTop: 15,
    alignItems: "center",
    borderColor: "black",
    backgroundColor: "#f6f6f6",
  },
  loginTitle: {
    marginTop: 100,
    marginBottom: 15,
    fontSize: 34,
    textAlign: "center",
    letterSpacing: 0.374,
  },
  loginDesc: {
    marginVertical: 10,
    fontSize: 17,
    lineHeight: 22,
    textAlign: "center",
    letterSpacing: -0.208,
    marginBottom: 30,
  },
  inputLabel: {
    fontSize: 17,
    textAlign: "center",
    color: "darkgrey",
    marginBottom: 4,
  },
  textInput: {
    borderRadius: 15,
    padding: 20,
    width: 343,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 15,
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
});
