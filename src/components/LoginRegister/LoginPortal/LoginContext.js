import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [details, setDetails] = useState([
    { email: "email", password: "password"}]);

  return (
    <LoginContext.Provider value={[details, setDetails]}> {props.children}
    </LoginContext.Provider>
  )
}

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired
};
