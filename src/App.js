import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppContext from './Context/Provider';
import ScrollToTop from './Utils/ScrollToTop';
import Home from './Components/Home/Home';
import Students from './Components/Students/Students';
import './App.css';


function App() {

  return (
    <AppContext>
      <ScrollToTop>
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
      </ScrollToTop>
    </AppContext>
  );
}

export default App;
