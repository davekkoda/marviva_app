import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { WebView } from "react-native-webview";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home({ navigation }) {

  const iframeString = (
  `<iframe 
  src="https://app.sigmacomputing.com/embed/1-6Q7jBGcLvmaGGuIm8RkOJ5" 
  width=960 height=510>
  </iframe>`
  );

  const pressProfile = () => {
    navigation.navigate('Profile')
  };

  return (
    <View style={styles.main}>
      <Header />
      <View style={styles.contentHolder}>
        <ScrollView>
          <View style={styles.contentBody}>
            <Text style={styles.textTitle}>Fish Map</Text>
            <Text style={styles.textBody}>Fishes and their Locations:</Text>
            <Image
              source={require("../assets/images/fish.png")}
              style={styles.contentImage}
            />
          </View>
          <View style={styles.contentBody}>
            <Text style={styles.textTitle}>Fish Catch</Text>
            <Text style={styles.textBody}>Largest Fish Caught Yesterday:</Text>
            <Image
              source={require("../assets/images/shark.jpeg")}
              style={styles.contentImage}
            />
          </View>
          <View style={styles.contentBody}>
            <Text style={styles.textTitle}>Fish Catch</Text>
            <Text style={styles.textBody}>Heaviest Fish Caught Yesterday:</Text>
            <Image
              source={require("../assets/images/whale.png")}
              style={styles.contentImage}
            />
          </View>
          <View style={styles.contentBody}>
            <Text style={styles.textTitle}>Temperature</Text>
            <Text style={styles.textBody}>Temperature over the Week:</Text>
            <Image
              source={require("../assets/images/temperature.png")}
              style={styles.contentImage}
            />
          </View>
          <View style={styles.contentBody}>
            <Text style={styles.textTitle}>Weather</Text>
            <Text style={styles.textBody}>Weather Warning this Week:</Text>
            <Image
              source={require("../assets/images/weather.jpeg")}
              style={styles.contentImage}
            />
          </View>
          <View style={styles.contentBody}>
            <Text style={styles.textTitle}>Sigma Test</Text>
            <Text style={styles.textBody}>Testing Loading in Sigma:</Text>
            <View style={styles.dataViz}>
            <WebView style={styles.dataViz}
            originWhitelist={['*']}
            source={{
              html: 
              `
              <!DOCTYPE html>
              <html>
                  <div>${iframeString}</div> 
              </html>
              `,
            }}
            />
          </View>
          </View>
        </ScrollView>
      </View>
      <Footer onPressProfile={pressProfile} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#f6f6f6",
  },
  contentHolder: {
    padding: 10,
    marginHorizontal: 5,
    marginTop: 20,
    marginBottom: 15,
    flex: 1,
    backgroundColor: "white",
    borderColor: "darkgrey",
    borderWidth: 1,
    borderRadius: 10,
  },
  contentBody: {
    borderColor: "#darkgrey",
    borderLeftColor: "white",
    borderRightColor: "white",
    borderWidth: 1,
    flex: 1,
    marginBottom: 10,
    padding: 5,
    paddingBottom: "45%",
    height: undefined,
    aspectRatio: 1.2,
  },
  contentImage: {
    width: 372,
    height: "100%",
    padding: 110,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
  },
  textTitle: {
    fontFamily: "Cochin",
    fontSize: 30,
    color: "#262626",
  },
  textBody: {
    fontFamily: "Cochin",
    fontSize: 20,
    paddingBottom: 10,
    color: "#262626",
  },
  dataViz: {
    height: '160%',
    width: '100%',
    borderColor: '#f7f7f7',
    borderWidth: 1,
    borderRadius: 10,
    padding: -5,
  }
});
