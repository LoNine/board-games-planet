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

interface IPlayersCountProps {
  onChange: (query: IQueryObj) => void;
}

const PlayersCount: FC<IPlayersCountProps> = ({ onChange }) => {
  const [players, setPlayers] = useState('any')
  const menuItems = [];

  for (let i = 1; i<10; i++) {
    menuItems.push(<MenuItem key={i} value={i}>{i===9 ? '9+' : i}</MenuItem>)
  }

  const handleOnChange = (event: SelectChangeEvent) => {
    setPlayers(event.target.value);

    onChange({ key: "layer_counts", value: event.target.value });
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="players-label">Players</InputLabel>
        <Select
          labelId="players-select-label"
          id="players-select"
          value={players}
          label="Players"
          onChange={handleOnChange}
        >
          <MenuItem defaultChecked value="any">
            Any
          </MenuItem>
          {menuItems.map((item) => item)}
        </Select>
      </FormControl>
    </div>
  );
};

export default PlayersCount;
