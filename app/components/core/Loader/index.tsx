import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const Loader:React.FC = () => {
  return (
    <ActivityIndicator style={styles.container} size={'large'}  color="#0000ff" />
  );
};

export default Loader;
