import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StudentsList } from '../Utils/StudentsList';
import { Texts } from '../Utils/Texts';


export const Context = React.createContext();
const AppContext = (props) => {
  const [state, setLanguage] = useState({
    students: StudentsList,
    texts: Texts,
    language: 'english',
    /*to save the choosed student with the more button */
    student: '' 

  });
  return (
    <Context.Provider value={{
      state,
      changeLanguage: (language) => setLanguage({
        ...state,
        language,
      }),
      chooseStudent: (student) => setLanguage({
        ...state,
        student: state.students.indexOf(student)
      })
    }}
    >
      {props.children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppContext;
