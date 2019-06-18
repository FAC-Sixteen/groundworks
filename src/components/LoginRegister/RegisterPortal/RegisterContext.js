import React, { useState, createContext } from "react";
import PropTypes from 'prop-types';

export const RegisterContext = createContext();

export const RegisterProvider = (props) => {
  const [name, setName] = useState([{name: "initial state"}]);

  return (
    <RegisterContext.Provider value={[name, setName]}>
      {props.children}
    </RegisterContext.Provider>
  );
};

RegisterProvider.propTypes = {
  children: PropTypes.node.isRequired
};
