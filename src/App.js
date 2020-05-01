import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import SearchContainer from './SearchContainer';
import Word from './Word'

function App() {
  return (
    <Router>
      <SearchContainer />
      <Switch>
        <Route exact path="/:wordid"><Word/></Route>
      </Switch>
    </Router>
  );
}

export default App;
