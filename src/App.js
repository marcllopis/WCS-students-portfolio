import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppContext from './Context/Provider';
import Home from './Components/Home/Home';
import Students from './Components/Students/Students';
import './App.css';


function App() {
  
  return (
    <AppContext>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} />}
        />
        <Route
          exact
          path="/students/:studentId"
          render={(props) => <Students {...props} />}
        />
      </Switch>
    </AppContext>
  );
}

export default App;
