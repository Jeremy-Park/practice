import React, { createContext, useState } from 'react'

export const MyContext = createContext()

const MyContextProvider = (props) => {
  const [selectedColors, setSelectedColors] = useState([
    'white',
    'white',
    'white',
    'white',
  ])

  return (
    <MyContext.Provider
      value={{
        selectedColors,
        setSelectedColors,
      }}
    >
      {props.children}
    </MyContext.Provider>
  )
}

export default MyContextProvider
