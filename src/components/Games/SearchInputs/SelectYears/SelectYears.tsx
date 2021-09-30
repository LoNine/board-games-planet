import { TextField } from "@mui/material";
import { useState, useRef } from "react";
import { ChangeEvent, FC } from "react-router/node_modules/@types/react";
import { IQueryObj } from "../SearchInputs";
import { debounce } from "lodash";

interface ISelectYearsProps {
  onChange: (query: IQueryObj) => void;
}

const SelectYears: FC<ISelectYearsProps> = ({ onChange }) => {
  const [yearFromValue, setYearFromValue] = useState("");
  const [yearToValue, setYearToValue] = useState("");
  const onYearDebounced = useRef(debounce(onChange, 300));

  const handleOnFromChange = (event: ChangeEvent<HTMLInputElement>) => {
    setYearFromValue(event.target.value);

    onYearDebounced.current({
      key: "gt_year_published",
      value: (+event.target.value - 1).toString(),
    });
  };

  const handleOnToChange = (event: ChangeEvent<HTMLInputElement>) => {
    setYearToValue(event.target.value);

    onYearDebounced.current({
      key: "lt_year_published",
      value: (+event.target.value + 1).toString(),
    });
  };

  return (
    <div>
      <TextField
        type="number"
        label="Year From"
        onChange={handleOnFromChange}
        value={yearFromValue}
      />
      <TextField
        type="number"
        label="Year To"
        onChange={handleOnToChange}
        value={yearToValue}
      />
    </div>
  );
};

export default SelectYears;
