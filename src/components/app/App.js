import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from '../chat/Chat';
import Login from '../login/Login';
import PrivateRoute from '../../helpers/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/"><Chat /></PrivateRoute>
        <Route exact path="/login"><Login /></Route>
      </Switch>
    </Router>
  );
}

export default App;
