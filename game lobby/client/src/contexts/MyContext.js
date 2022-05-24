import React, { createContext, useState, useEffect } from 'react'
import { update } from '../constants/constants'

export const MyContext = createContext()

const MyContextProvider = (props) => {
  const [selectedColors, setSelectedColors] = useState([
    'white',
    'white',
    'white',
    'white',
  ])

  const [userData, setUserData] = useState(null)

  const handleUpdate = async (userData) => {
    const updatedUserData = await update(userData)
    if (updatedUserData) {
      setUserData(updatedUserData)
    }
  }

  // selectedColors are updated?
  useEffect(() => {
    if (
      userData &&
      (userData.color1 !== selectedColors[0] ||
        userData.color2 !== selectedColors[1] ||
        userData.color3 !== selectedColors[2] ||
        userData.color4 !== selectedColors[3])
    ) {
      handleUpdate({
        ...userData,
        color1: selectedColors[0],
        color2: selectedColors[1],
        color3: selectedColors[2],
        color4: selectedColors[3],
      })
    }
  }, [selectedColors])

  // userdata is updated?
  useEffect(() => {
    if (
      userData &&
      (userData.color1 !== selectedColors[0] ||
        userData.color2 !== selectedColors[1] ||
        userData.color3 !== selectedColors[2] ||
        userData.color4 !== selectedColors[3])
    ) {
      setSelectedColors([
        userData.color1,
        userData.color2,
        userData.color3,
        userData.color4,
      ])
    }
  }, [userData])

  return (
    <MyContext.Provider
      value={{
        selectedColors,
        setSelectedColors,
        userData,
        setUserData,
      }}
    >
      {props.children}
    </MyContext.Provider>
  )
}

export default MyContextProvider
