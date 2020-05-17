import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StudentsList } from '../Utils/StudentsList';
import { MentorsList } from '../Utils/MentorsList';
import { Texts } from '../Utils/Texts';


const shuffleArray = (a) => {
  let j; let x; let i;
  // eslint-disable-next-line no-plusplus
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    // eslint-disable-next-line no-param-reassign
    a[i] = a[j];
    // eslint-disable-next-line no-param-reassign
    a[j] = x;
  }
  return a;
};


export const Context = React.createContext();

const arrayOfStudents = shuffleArray(StudentsList);

const AppContext = (props) => {
  const [state, changeState] = useState({
    students: arrayOfStudents,
    mentors: MentorsList,
    texts: Texts,
    language: 'english', // default language
    currentStudent: '',
  });

  return (
    <Context.Provider value={{
      state,
      changeLanguage: (language) => changeState({
        ...state,
        language,
      }),
      getCurrentStudent: (currentStudent) => changeState({
        ...state,
        currentStudent,
      }),
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
