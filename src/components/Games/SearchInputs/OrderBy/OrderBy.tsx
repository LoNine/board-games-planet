import {
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { FC } from "react-router/node_modules/@types/react";
import { IQueryObj } from "../SearchInputs";

interface IOrderByProps {
  onChange: (query: IQueryObj) => void;
}

const OrderBy: FC<IOrderByProps> = ({ onChange }) => {
  const [order, setOrder] = useState("");
  const [open, setOpen] = useState(false);

  const handleOnOpen = () => {
    setOpen(true);
  };

  const handleOnClose = () => {
    setOpen(false);
  };

  const handleOnChange = (event: SelectChangeEvent) => {
    setOrder(event.target.value);

    onChange({ key: "order_by", value: event.target.value });
  };

  return (
    <div>
      <FormControl fullWidth>
        <Button id="openSortMenu" onClick={handleOnOpen}>
          {" "}
          Sort By
        </Button>
        <Select
          style={{ display: "none" }}
          open={open}
          onClose={handleOnClose}
          labelId="order-select-label"
          id="order-select"
          value={order}
          label="Order By"
          onChange={handleOnChange}
          MenuProps={{
            anchorEl: document.getElementById("openSortMenu"),
          }}
        >
          <MenuItem defaultChecked value="any">
            Default
          </MenuItem>
          <MenuItem value="rank">Rank</MenuItem>
          <MenuItem value="trending">Trending</MenuItem>
          <MenuItem value="average_user_rating">Rating</MenuItem>
          <MenuItem value="name">Name A-Z</MenuItem>
          <MenuItem value="name_reverse">Name Z-A</MenuItem>
          <MenuItem value="year_published">Year Published</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default OrderBy;
