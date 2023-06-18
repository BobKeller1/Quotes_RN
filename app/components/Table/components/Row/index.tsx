import React, { memo } from "react";
import { StyleProp, Text, View, ViewStyle } from "react-native";

type RowProps = {
  name: string;
  last: string;
  highestBid: string;
  percentChange: string;
  containerStyle?: StyleProp<ViewStyle>;
  cellStyle?: StyleProp<ViewStyle>;
};
const Row: React.FC<RowProps> = memo(function Row({
  name,
  last,
  highestBid,
  percentChange,
  containerStyle,
  cellStyle,
}) {
  return (
    <View style={containerStyle}>
      <Text style={cellStyle}>{name}</Text>
      <Text style={cellStyle}>{last}</Text>
      <Text style={cellStyle}>{highestBid}</Text>
      <Text style={cellStyle}>{percentChange}</Text>
    </View>
  );
});

export default Row;
