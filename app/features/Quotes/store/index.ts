import { makeAutoObservable, observable, runInAction } from "mobx";
import { fetchQuoteListRequest } from "../gateway";
import { convertQuotesToQuotesList } from "../utils";
import { Quote } from "../entities/Quote";

interface IQuotesStore {
  quoteList: Quote[];
  quoteListState: {
    isFetching: boolean;
    isError: boolean;
  };
  fetchQuoteList: () => Promise<void>;
  updateQuoteList: () => Promise<void>;
  setStartLoading: () => void;
  setEndLoading: () => void;
  setError: () => void;
}
class QuotesStore implements IQuotesStore {
  quoteList: Quote[] = [];
  quoteListState = {
    isFetching: false,
    isError: false,
  };
  constructor() {
    makeAutoObservable(this, {
      quoteList: observable,
      quoteListState: observable,
    });
  }

  setStartLoading = () => {
    this.quoteListState.isFetching = true;
    this.quoteListState.isError = false;
  };

  setEndLoading = () => {
    this.quoteListState.isFetching = false;
    this.quoteListState.isError = false;
  };

  setError = () => {
    this.quoteListState.isFetching = false;
    this.quoteListState.isError = true;
  };

  fetchQuoteList = async () => {
    try {
      this.setStartLoading();
      const quoteList = await fetchQuoteListRequest();
      runInAction(() => {
        this.quoteList = convertQuotesToQuotesList(quoteList);
      });
      this.setEndLoading();
    } catch (e) {
      console.log(e, "ERROR");
      this.setError();
    }
  };

  updateQuoteList = async () => {
    try {
      const quoteList = await fetchQuoteListRequest();
      runInAction(() => {
        this.quoteList = convertQuotesToQuotesList(quoteList);
      });
    } catch (e) {
      console.log(e, "ERROR");
      this.setError();
    }
  };
}

export default QuotesStore;
