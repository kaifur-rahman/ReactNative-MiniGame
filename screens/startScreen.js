import { useState } from "react";
import { StyleSheet, View, TextInput, Alert } from "react-native";
import Card from "../components/card";
import Button from "../components/button";

function StartScreen({ setGlobNum }) {
  const [userNumber, setUserNumber] = useState("");
  function resetPress() {
    setUserNumber("");
  }
  function confirmPress() {
    const num = parseInt(userNumber);
    if (isNaN(num) || num <= 0 || num > 100) {
      Alert.alert("Instruction", "Number should lie between 0 & 100 only!", [
        { text: "Okay", style: "default", onPress: () => setUserNumber("") },
      ]);

      return;
    }
    setGlobNum(userNumber);
  }
  function handleNumberInput(text) {
    setUserNumber(text);
  }
  return (
    <Card style={styles.parentContainer}>
      <View style={styles.TextContainer}>
        <TextInput
          style={styles.title}
          maxLength={2}
          keyboardType="number-pad"
          value={userNumber}
          onChangeText={handleNumberInput}
        ></TextInput>
      </View>
      <View style={styles.ButtonParentContainer}>
        <Button text={"Reset"} func={resetPress}></Button>
        <Button text={"Confirm"} func={confirmPress}></Button>
      </View>
    </Card>
  );
}
const styles = StyleSheet.create({
  parentContainer: {
    width: 350,
    height: 150,
  },
  TextContainer: {
    color: "#000000",
    width: 100,
    width: 120,
    borderBottomColor: "#E6DC0A",
    borderBottomWidth: 3,
    marginBottom: 10,
  },
  title: {
    color: "#E6DC0A",
    fontWeight: "bold",
    padding: 5,
    textAlign: "center",
  },

  ButtonParentContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
});
export default StartScreen;
