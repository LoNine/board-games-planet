import { useState, useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "./AutocompliteHeader.module.scss";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getGamesByName } from "../../../app/games";
import { ChangeEvent, FC } from "react-router/node_modules/@types/react";
import { debounce } from "lodash";
import { Link } from "react-router-dom";
interface IGameSerchOption {
  name: string;
  id: string;
}

const AutocompliteHeader:FC = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<IGameSerchOption[]>([]);
  const [inputValue, setInputValue] = useState("");
  const { searchByName } = useAppSelector((state) => state.games);
  useEffect(() => {
    if (searchByName) {
      setValue(
        searchByName.map((game) => {
          return {
            name: game.name,
            id: game.id,
          };
        })
      );
    }
  }, [searchByName]);

  const searchHandle = (input: string) => {
    dispatch(getGamesByName(input));
  };

  const debounced = useRef(debounce(searchHandle, 300));

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);

    debounced.current(event.target.value);
  };

  return (
    <div className={styles.container}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={value}
        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => (
          <div>
            <Link to={`/games/${option.id}`} key={option.id}>
              {option.name}
            </Link>
          </div>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Board Games"
            value={inputValue}
            onChange={handleOnChange}
          />
        )}
        fullWidth
      />
    </div>
  );
}
export default AutocompliteHeader;
