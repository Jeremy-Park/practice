import Select from "@mui/material/Select";
import React, { useContext } from "react";
import { InputLabel } from "@mui/material";
import { MenuItem } from "@mui/material";
import { MyContext } from "../contexts/MyContext";

const ColorPicker = ({ playerIndex }) => {
  const value = useContext(MyContext);
  const [selectedColors, setSelectedColors] = value.selectedColors;
  const [disabledColors, setDisabledColors] = value.disabledColors;

  function handleChange(event) {
    // Disabled colors array update
    let newDisabledColors = [...disabledColors];
    const color = event.target.value;
    const index = newDisabledColors.indexOf(color);

    // current color is in disabled colors remove it
    if (disabledColors.indexOf(selectedColors[playerIndex]) === -1) {
      // Do nothing
    } else {
      newDisabledColors.splice(index, 1);
      setDisabledColors(newDisabledColors);
    }

    // Add to disabled color
    newDisabledColors.push(color);
    setDisabledColors(newDisabledColors);

    // Player Color (working)
    let newArray = [...selectedColors];
    newArray[playerIndex] = color;
    setSelectedColors(newArray);

    // setSelectedColors((prev) => {
    //   const arr = [...prev];
    //   arr[playerIndex] = color;
    //   return arr;
    // });
    console.log("selected colors: " + selectedColors);

  }

  return (
    <div>
      <InputLabel id="demo-simple-select-label">Color</InputLabel>
      <Select
        labelId="select_label"
        id="select"
        value={selectedColors[playerIndex]}
        label="Color"
        onChange={handleChange}
      >
        <MenuItem
          disabled={selectedColors.includes("blue") ? true : false}
          value={"blue"}
        >
          blue
        </MenuItem>
        <MenuItem
          disabled={selectedColors.includes("red") ? true : false}
          value={"red"}
        >
          red
        </MenuItem>
        <MenuItem
          disabled={selectedColors.includes("yellow") ? true : false}
          value={"yellow"}
        >
          yellow
        </MenuItem>
        <MenuItem
          disabled={selectedColors.includes("brown") ? true : false}
          value={"brown"}
        >
          brown
        </MenuItem>
        <MenuItem
          disabled={selectedColors.includes("orange") ? true : false}
          value={"orange"}
        >
          orange
        </MenuItem>
        <MenuItem
          disabled={selectedColors.includes("teal") ? true : false}
          value={"teal"}
        >
          teal
        </MenuItem>
        <MenuItem
          disabled={selectedColors.includes("lightblue") ? true : false}
          value={"lightblue"}
        >
          lightblue
        </MenuItem>
      </Select>
    </div>
  );
};

export default ColorPicker;
