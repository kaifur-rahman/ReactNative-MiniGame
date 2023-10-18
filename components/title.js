import { View, Text, StyleSheet } from "react-native";

function Title({ children, st, textStyle }) {
  return (
    <View style={[style.TitleContainer, st]}>
      <Text style={[style.Title, textStyle]}>{children}</Text>
    </View>
  );
}
const style = StyleSheet.create({
  TitleContainer: {
    borderColor: "#ffffff",
    borderWidth: 3,
    padding: 10,
    borderRadius: 10,
  },
  Title: {
    fontSize: 20,
    padding: 10,
    color: "#ffffff",
    letterSpacing: 2,
  },
});
export default Title;
