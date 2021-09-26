import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { FC } from "react-router/node_modules/@types/react";
import { IQueryObj } from "../SearchInputs";

interface ISelectYearsProps {
  onChange: (query:IQueryObj) => void;
}

const SelectYears: FC<ISelectYearsProps> = ({  onChange }) => {
  const [yearValue, setYearValue] = useState('')

  const date = new Date();
  const menuItems = [];
  menuItems.push(<MenuItem value='any'>Any</MenuItem>)
  for (let i = date.getFullYear(); i >= 1980; i--) {
    menuItems.push(
      <MenuItem key={i} value={i}>
        {i}
      </MenuItem>
    );
  }

  const handleOnChange = (event:SelectChangeEvent) => {
    setYearValue(event.target.value);

    onChange({key:'year_published', value: event.target.value})
  }
  

  return (
    <FormControl >
      <InputLabel id="year-label">Year</InputLabel>
      <Select
        labelId="year-select-label"
        id="year-select"
        value={yearValue}
        label="Year"
        onChange={handleOnChange}
      >
        {menuItems.map((item) => item)}
      </Select>
    </FormControl>
  );
};

export default SelectYears;
