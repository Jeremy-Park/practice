import Select from "@mui/material/Select";
import FormControl from "@mui/material/Select";

import React, { useContext } from "react";
import { InputLabel } from "@mui/material";
import { MenuItem } from "@mui/material";
import { ColorArrayContext } from "../contexts/ColorArrayContext";
import { ColorContext } from "../contexts/ColorContext";

const ColorPicker = () => {
  // using context now ColorContext
  // const ColorPicker = ({ color, setColor, colorArray, setColorArray }) => {

  const { colorArray } = useContext(ColorArrayContext);
  const { setColorArray } = useContext(ColorArrayContext);
  const { color } = useContext(ColorContext);
  const { setColor } = useContext(ColorContext);

  function handleChange(event) {
    // Here, we invoke the callback with the new value

    setColorArray((prev) => {
      const arr = [...prev];
      const ind = arr.indexOf(color);

      if (ind !== -1) {
        arr.splice(ind, 1);
      }
      return arr;
    });

    setColor(event.target.value);

    setColorArray((prev) => {
      const arr = [...prev, event.target.value];
      return arr;
    });
  }

  return (
    <div>
      <InputLabel id="demo-simple-select-label">Color</InputLabel>
      <Select
        labelId="select_label"
        id="select"
        value={color}
        label="Color"
        onChange={handleChange}
      >
        <MenuItem
          disabled={colorArray.includes("blue") ? true : false}
          value={"blue"}
        >
          blue
        </MenuItem>
        <MenuItem
          disabled={colorArray.includes("red") ? true : false}
          value={"red"}
        >
          red
        </MenuItem>
        <MenuItem
          disabled={colorArray.includes("yellow") ? true : false}
          value={"yellow"}
        >
          yellow
        </MenuItem>
        <MenuItem
          disabled={colorArray.includes("brown") ? true : false}
          value={"brown"}
        >
          brown
        </MenuItem>
        <MenuItem
          disabled={colorArray.includes("orange") ? true : false}
          value={"orange"}
        >
          orange
        </MenuItem>
        <MenuItem
          disabled={colorArray.includes("teal") ? true : false}
          value={"teal"}
        >
          teal
        </MenuItem>
        <MenuItem
          disabled={colorArray.includes("lightblue") ? true : false}
          value={"lightblue"}
        >
          lightblue
        </MenuItem>
      </Select>
    </div>
  );
};

export default ColorPicker;
