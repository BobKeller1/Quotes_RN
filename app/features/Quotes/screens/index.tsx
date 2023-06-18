import { View, StyleSheet } from "react-native";
import React, { useCallback, useEffect, useRef } from "react";
import Table from "../../../components/Table";
import { useFocusEffect } from "@react-navigation/native";
import QuotesStore from "../store";
import { observer } from "mobx-react-lite";
import Loader from "../../../components/core/Loader";

const styles = StyleSheet.create({
  cellColour: {
    backgroundColor: "#99CCFF",
  },
  cellText: {
    fontSize: 12,
  }
});

const COLUMN_NAMES = [
  "Ticker Name",
  "Last",
  "Highest Bid",
  "Percentage Change",
];

const store = new QuotesStore();

const Quotes: React.FC = observer(() => {
  const mountedRef = useRef(false);

  useEffect(() => {
    if (mountedRef.current) return;
    store.fetchQuoteList().then(() => null);
    mountedRef.current = true;
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (!mountedRef.current) return;
      const test = setInterval(() => store.updateQuoteList(), 5000);

      return () => clearInterval(test);
    }, [])
  );

  if (store.quoteListState.isFetching) return <Loader />

  return (
    <View>
      <Table
        columnNameList={COLUMN_NAMES}
        data={store.quoteList}
        isError={store.quoteListState.isError}
        cellColor={styles.cellColour}
        cellText={styles.cellText}
      />
    </View>
  );
});
export default Quotes;
