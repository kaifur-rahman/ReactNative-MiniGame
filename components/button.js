import { View, Pressable, Text, StyleSheet } from "react-native";

function Button({ children, text, func }) {
  return (
    <View>
      <Pressable
        onPress={func}
        style={({ pressed }) => [
          styles.pressable,
          {
            borderRadius: pressed ? 20 : 20,
            opacity: pressed ? 0.75 : 1,
            backgroundColor: "#AB0569",
          },
        ]}
      >
        <Text style={styles.buttonText}>
          {text}
          {children}
        </Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  pressable: {
    padding: 5,
    marginLeft: 10,
    backgroundColor: "#AB0569",
    borderRadius: 10,
    width: 120,
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default Button;
