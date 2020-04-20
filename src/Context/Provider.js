import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StudentsList } from '../Utils/StudentsList';
import { Text } from '../Utils/text';


export const Context = React.createContext();
const AppContext = (props) => {
  const [state] = useState({ ...StudentsList, ...Text });
  return (
    <Context.Provider value={{ state }}>
      {props.children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppContext;
