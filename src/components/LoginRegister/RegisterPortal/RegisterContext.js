import React, { useState, createContext } from "react";

export const RegisterContext = createContext();

export const RegisterProvider = props => {
  console.log("here", props);
  const [name, setName] = useState("");
  return (
    <RegisterContext.Provider value={[name, setName]}>
      {this.props.children}
    </RegisterContext.Provider>
  );
};
