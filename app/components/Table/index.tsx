import {
  StyleSheet,
  FlatList,
  StyleProp,
  ViewStyle,
  TextStyle,
  View,
  Text,
} from "react-native";
import React, { memo, useCallback } from "react";
import Row from "./components/Row";
import Header from "./components/Header";
import { Quote } from "../../features/Quotes/entities/Quote";

type TableProps = {
  columnNameList: string[];
  data: Quote[];
  isError: boolean;
  cellColor?: StyleProp<ViewStyle>;
  cellText?: StyleProp<TextStyle>;
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 8,
  },
  tableHeader: {
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  rowContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderRightWidth: StyleSheet.hairlineWidth,
  },
  cell: {
    flex: 1,
    paddingHorizontal: 2,
    paddingVertical: 10,
  },
  error: {
    justifyContent: "center",
    alignItems: "center",
    height: 32,
    backgroundColor: "#FF3300",
  },
});
const Table: React.FC<TableProps> = memo(function Table({
  columnNameList,
  data,
  cellColor,
  cellText,
  isError,
}) {
  const renderHeader = useCallback(
    () => <Header columnNameList={columnNameList} />,
    [columnNameList]
  );

  const renderItem = useCallback(
    ({ item: { name, highestBid, last, percentChange }, index }) => (
      <Row
        cellList={[name, highestBid, last, percentChange]}
        containerStyle={styles.rowContainer}
        cellStyle={[styles.cell, index % 2 === 0 && cellColor, cellText]}
      />
    ),
    [cellColor, cellText]
  );

  return (
    <>
      {isError && (
        <View style={styles.error}>
          <Text>Ошибка загрузки</Text>
        </View>
      )}
      {data.length ? renderHeader() : null}
      <FlatList
        // @ts-ignore
        keyExtractor={({ id }) => id}
        data={data}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        initialNumToRender={25}

      />
    </>
  );
});

export default Table;
