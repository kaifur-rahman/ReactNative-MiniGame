import { useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import StartScreen from "./screens/startScreen";
import NumberGuessScreen from "./screens/numberGuessScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  function setUserNumberGlob(num) {
    console.log(num);
    setUserNumber(num);
  }
  return (
    <LinearGradient
      colors={["#4e0329", "#ddb52f"]}
      style={styles.startScreenContainer}
    >
      <ImageBackground
        source={require("./assets/dice.jpg")}
        imageStyle={{ opacity: 0.15 }}
        style={styles.bgImage}
      >
        {userNumber != null ? (
          <NumberGuessScreen userNum={userNumber}></NumberGuessScreen>
        ) : (
          <StartScreen setGlobNum={setUserNumberGlob}></StartScreen>
        )}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  startScreenContainer: {
    flex: 1,
    flexDirection: "column",

    backgroundColor: "#AC0EC9",
  },
  bgImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
