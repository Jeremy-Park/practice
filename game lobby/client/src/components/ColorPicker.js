import Select from '@mui/material/Select'
import React, { useContext } from 'react'
import { InputLabel } from '@mui/material'
import { MenuItem } from '@mui/material'
import { MyContext } from '../contexts/MyContext'
import { AVAILABLE_COLORS } from '../constants/constants'

const ColorPicker = ({ playerIndex }) => {
  // context
  const { selectedColors, setSelectedColors } = useContext(MyContext)

  // updates selectedColors array
  const handleChange = (event) => {
    let newArray = [...selectedColors]
    newArray[playerIndex] = event.target.value
    setSelectedColors(newArray)
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
        {AVAILABLE_COLORS.map((color, index) => {
          return (
            <MenuItem
              key={'menu item' + index.toString()}
              disabled={selectedColors.includes(color) ? true : false}
              value={color}
            >
              {color}
            </MenuItem>
          )
        })}
      </Select>
    </div>
  )
}

export default ColorPicker
