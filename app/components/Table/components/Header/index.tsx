import React, { memo } from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: StyleSheet.hairlineWidth,
  },
  cell: {
    flex: 1,
    paddingHorizontal: 2,
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
type HeaderProps = {
  columnNameList: string[];
  containerStyle?: StyleProp<ViewStyle>;
  cellStyle?: StyleProp<ViewStyle>;
};
const Header: React.FC<HeaderProps> = memo(function Header({
  columnNameList,
  containerStyle,
  cellStyle,
}) {
  return (
    <View style={[styles.container, containerStyle]}>
      {columnNameList.map((name, index) => (
        <Text style={[styles.cell, cellStyle]} key={index}>
          {name}
        </Text>
      ))}
    </View>
  );
});

export default Header;
