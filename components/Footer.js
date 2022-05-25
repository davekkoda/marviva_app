import { StyleSheet, Pressable, Image, View } from "react-native";

function Footer(props) {

  return (
    <View style={styles.footer}>
      <View style={styles.bar}>
        <Pressable style={({ pressed }) => pressed && styles.pressedItem}
        onPress={props.onPressHome}>
          <Image
            style={styles.sideIcon}
            source={require("../assets/images/home.png")}
          />
        </Pressable>
        <Pressable style={({ pressed }) => pressed && styles.pressedItem}>
          <Image
            style={styles.mainIcon}
            source={require("../assets/images/picture.png")}
          />
        </Pressable>
        <Pressable style={({ pressed }) => pressed && styles.pressedItem}
        onPress={props.onPressProfile}>
          <Image
            style={styles.sideIcon}
            source={require("../assets/images/user.png")}
          />
        </Pressable>
      </View>
    </View>
  );
}

export default Footer;

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    position: "aboslute",
    height: 105,
    backgroundColor: "#f6f6f6",
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 200,
    shadowColor: "black",
    shadowRadius: 10,
    shadowOpacity: 0.15,
  },
  bar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  pressedItem: {
    backgroundColor: "#E8E8E8",
    borderRadius: 500,
  },
  sideIcon: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 50,
    borderColor: "darkgrey",
    borderWidth: 0.5,
  },
  mainIcon: {
    width: 75,
    height: 75,
  },
});
