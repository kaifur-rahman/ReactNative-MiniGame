import { View, StyleSheet } from "react-native";

function Card({ children, style }) {
  return <View style={[styles.parentContainer, style]}>{children}</View>;
}
const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: "#520433",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 30,
  },
});
export default Card;
