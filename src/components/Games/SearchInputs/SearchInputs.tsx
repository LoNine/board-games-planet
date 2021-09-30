import { Button, Pagination, TextField } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { ChangeEvent, FC } from "react-router/node_modules/@types/react";
import SelectYears from "./SelectYears";
import { debounce } from "lodash";
import OrderBy from "./OrderBy";
import PlayersCount from "./PlayersCount";
import PlayTime from "./PlayTime/PlayTime";
import styles from "./SearchInputs.module.scss";
import ButtonsLair from "./ButtonsLair";

interface ISearchInputProps {
  onSearch: (query: IQueryObj[], skip: string) => void;
  count:number
}

export interface IQueryObj {
  key: string;
  value: string;
}

const SearchInputs: FC<ISearchInputProps> = ({ onSearch, count }) => {
  const [query, setQuery] = useState<IQueryObj[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState(1);

  const handleOnSetQuery = (newQuery: IQueryObj) => {
    if (newQuery.value === "any") {
      setQuery((prevState) =>
        prevState.filter((item) => item.key !== newQuery.key)
      );
    } else {
      setQuery((prevState) => {
        const index = prevState.findIndex((item) => item.key === newQuery.key);

        if (index >= 0) {
          prevState[index].value = newQuery.value;
          return [...prevState];
        }
        return [...prevState, newQuery];
      });
    }
  };

  const onInputDebounced = useRef(debounce(handleOnSetQuery, 300));

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);

    onInputDebounced.current({ key: "name", value: event.target.value });
  };

  const handleOnPanaginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    console.log(event)
  }
  

  useEffect(() => {
    onSearch(query, ((page - 1) * 20).toString());
  }, [query, page]);

  return (
    <div>
      <div className={styles.container}>
        <TextField
          onChange={handleOnChange}
          value={inputValue}
          placeholder="Game name"
        />
        <SelectYears onChange={handleOnSetQuery} />
        <OrderBy onChange={handleOnSetQuery} />
        <PlayersCount onChange={handleOnSetQuery} />
        <PlayTime onChange={handleOnSetQuery} />
      </div>
      <div>
        {query.length > 0 && (
          <ButtonsLair onClick={handleOnSetQuery} query={query} />
        )}
      </div>
      <Pagination count={Math.ceil(count/20)} page={page} onChange={handleOnPanaginationChange} />
    </div>
  );
};

export default SearchInputs;
