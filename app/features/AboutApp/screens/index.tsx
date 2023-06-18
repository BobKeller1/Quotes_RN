import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { Nav, TABS } from "../../../navigation/entities";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    gap: 16,
  },
  button: {
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderColor: "#0070f3",
    backgroundColor: "#0070f3",
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    fontFamily: "Gill Sans",
    fontSize: 14,
  },
  buttonText: {
    color: "#ffffff",
  },
  logo: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

const AboutApp = () => {
  const navigation = useNavigation<Nav>();
  const navigateToQuotes = useCallback(
    () => navigation.navigate(TABS.QUOTES),
    [navigation]
  );
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </Text>
      <Image
        style={styles.logo}
        source={{
          uri: "https://e0.pxfuel.com/wallpapers/96/340/desktop-wallpaper-cool-white-cat-with-round-sunglasses-cat-wearing-glasses.jpg",
        }}
      />
      <TouchableOpacity onPress={navigateToQuotes}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Посмотреть Котировки</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AboutApp;
