import { useState } from "react";
import {
  Button,
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
  const [players, setPlayers] = useState("any");
  const [open, setOpen] = useState(false);

  const handleOnOpen = () => {
    setOpen(true);
  };

  const handleOnClose = () => {
    setOpen(false);
  };
  const menuItems = [];

  for (let i = 1; i < 10; i++) {
    menuItems.push(
      <MenuItem key={i} value={i}>
        {i === 9 ? "9+" : i}
      </MenuItem>
    );
  }

  const handleOnChange = (event: SelectChangeEvent) => {
    setPlayers(event.target.value);

    onChange({ key: "player_counts", value: event.target.value });
  };

  return (
    <div>
      <FormControl fullWidth>
        <Button id="openPlayersMenu" onClick={handleOnOpen}>
          Players
        </Button>
        <Select
          style={{ display: "none" }}
          open={open}
          onClose={handleOnClose}
          labelId="players-select-label"
          id="players-select"
          value={players}
          label="Players"
          onChange={handleOnChange}
          MenuProps={{
            anchorEl: document.getElementById("openPlayersMenu"),
          }}
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
