import React, { createContext, useState } from "react";

export const MyContext = createContext();

const MyContextProvider = (props) => {

  const [selectedColors, setSelectedColors] = useState(["white","white","white","white",]);
  const [disabledColors, setDisabledColors] = useState([]);

  return (
    <MyContext.Provider
      value={{
        selectedColors: [selectedColors, setSelectedColors],
        disabledColors: [disabledColors, setDisabledColors],
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;