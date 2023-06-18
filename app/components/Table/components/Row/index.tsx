import React, { memo } from "react";
import { StyleProp, Text, View, ViewStyle } from "react-native";

type RowProps = {
  cellList: string[];
  containerStyle?: StyleProp<ViewStyle>;
  cellStyle?: StyleProp<ViewStyle>;
};
const Row: React.FC<RowProps> = memo(function Row({
  cellList,
  containerStyle,
  cellStyle,
}) {
  return (
    <View style={containerStyle}>
      {cellList.map((cell, index) => (
        <Text style={cellStyle} key={index}>{cell}</Text>
      ))}
    </View>
  );
});

export default Row;
