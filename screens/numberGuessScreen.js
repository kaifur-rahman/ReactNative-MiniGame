import { View, Text, StyleSheet } from "react-native";
import Title from "../components/title";
import Card from "../components/card";
import Button from "../components/button";
import { Ionicons } from "@expo/vector-icons";

function NumberGuessScreen({ userNum }) {
  function handleHigherBtn() {
    console.log("Higher pressed");
  }
  function handleLowerBtn() {
    console.log("Lower pressed");
  }

  return (
    <>
      <View>
        <Title st={style.oppExtraStyle} textStyle={style.oppTextStyle}>
          {" "}
          Opponent's Guess
        </Title>
      </View>
      <Title st={style.numExtraStyle} textStyle={style.numTextStyle}>
        {userNum}
      </Title>
      <Card>
        <Text style={style.cardTitle}>Is It Higher or Lower?</Text>
        <View style={style.btnContainer}>
          <Button func={handleHigherBtn}>
            {" "}
            <Ionicons name="ios-arrow-up" size={24} color="white" />
          </Button>

          <Button func={handleLowerBtn}>
            <Ionicons name="ios-arrow-down" size={24} color="white" />
          </Button>
        </View>
      </Card>
    </>
  );
}
const style = StyleSheet.create({
  numExtraStyle: {
    marginTop: 20,
    borderColor: "yellow",
    fontSize: 1,
    width: 200,
    height: 100,
  },
  oppExtraStyle: {
    marginTop: -50,
    width: 350,
    textAlign: "center",
  },
  oppTextStyle: { textAlign: "center" },
  numTextStyle: {
    fontSize: 45,
    textAlign: "center",
    padding: 5,
    color: "yellow",
  },
  text: {
    color: "#ffffff",
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginTop: -3,
  },
  cardTitle: {
    color: "#ffffff",
    padding: 5,
    marginTop: 5,
    letterSpacing: 1,
  },
});
export default NumberGuessScreen;
