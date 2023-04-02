import { StatusBar, StyleSheet, Text, View } from "react-native";
import { DefaultTheme, IconButton } from "react-native-paper";

const Header = ({ title, screenType = "home" }) => {
  return (
    <View>
      <StatusBar
        barStyle="light-content"
        backgroundColor={DefaultTheme.colors.primary}
      />
      <View
        style={{
          ...styles.containerHeader,
          flexDirection: screenType === "editing" ? "row-reverse" : "row",
          justifyContent:
            screenType === "editing" ? "flex-end" : "space-between",
        }}
      >
        <Text style={styles.textHeader}>{title}</Text>
        <IconButton
          style={styles.buttonHeader}
          icon={screenType === "editing" ? "arrow-left" : "account-circle"}
          iconColor="#fff"
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  containerHeader: {
    paddingTop: 15,
    backgroundColor: DefaultTheme.colors.primary,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textHeader: {
    fontSize: 20,
    marginHorizontal: 20,
    color: "#fff",
  },
  buttonHeader: {
    marginLeft: 20,
  },
});
