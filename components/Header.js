import { StyleSheet, Text, Image, View, } from "react-native";

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.Text}>MarViva</Text>
      <Image
        source={require("../assets/images/fishlogo.png")}
        style={styles.headerImage}
      />
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f6f6f6",
    paddingTop: "6.5%",
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 20,
    shadowColor: "black",
    shadowRadius: 10,
    shadowOpacity: 0.25,
  },
  Text: {
    fontFamily: "Georgia",
    fontSize: 50,
    letterSpacing: 0.02,
    paddingVertical: "5.5%",
    textAlign: "center",
    color: "#1C3F91",
    shadowColor: "black",
    shadowRadius: 5,
    shadowOpacity: 0.15,
  },
  headerImage: {
    position: "absolute",
    width: 50,
    height: 50,
    left: "82%",
    top: "55%",
  },
});
