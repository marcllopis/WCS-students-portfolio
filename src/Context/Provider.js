import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StudentsList } from '../Utils/StudentsList';
import { Texts } from '../Utils/Texts';


export const Context = React.createContext();

const AppContext = (props) => {
  const [state] = useState({ students: StudentsList, texts: Texts });
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
