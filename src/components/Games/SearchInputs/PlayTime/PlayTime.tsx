import {useState}from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { FC } from "react-router/node_modules/@types/react";
import { IQueryObj } from "../SearchInputs";

interface IPlayeTimeProps {
  onChange: (query: IQueryObj) => void;
}

const PlayTime:FC<IPlayeTimeProps> = ({onChange}) => {
  const [time, setTime] = useState('any')

  const handleOnChange = (event: SelectChangeEvent) => {
    setTime(event.target.value);

    onChange({ key: "lt_max_playtime", value: event.target.value });
  };


  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="playtime-label">Playtime</InputLabel>
        <Select
          labelId="playtime-select-label"
          id="playtime-select"
          value={time}
          label="Playtime"
          onChange={handleOnChange}
        >
          <MenuItem defaultChecked value="any">
            Any
          </MenuItem>
          <MenuItem value='16'>15 Minutes Max</MenuItem>
          <MenuItem value='31'>30 Minutes Max</MenuItem>
          <MenuItem value='46'>45 Minutes Max</MenuItem>
          <MenuItem value='61'>60 Minutes Max</MenuItem>
          <MenuItem value='91'>90 Minutes Max</MenuItem>
          <MenuItem value='121'>120 Minutes Max</MenuItem>
          <MenuItem value='120'>120+ Minutes</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default PlayTime
