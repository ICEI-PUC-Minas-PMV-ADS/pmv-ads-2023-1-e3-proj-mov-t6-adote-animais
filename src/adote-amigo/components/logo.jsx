import { View, StyleSheet, Text, Image } from "react-native";
import { DefaultTheme } from "react-native-paper";

const Logo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Central Animal</Text>
      <Image style={styles.logoImage} source={require("../assets/logo.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  logoText: {
    fontSize: 50,
    fontFamily: "Chewy",
    color: DefaultTheme.colors.primary,
  },
  logoImage: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});

export default Logo;
