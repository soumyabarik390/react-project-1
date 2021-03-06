import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

import { AuthContextProvider } from './context/AuthContext';
import './App.css';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Dashboard from './pages/Dashboard/Dashboard';
import Course from './pages/Course/Course';

function App() {
  return (
    <AuthContextProvider>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/course/:id" component={Course} />
      </Switch>
    </AuthContextProvider>
  );
}
export default withRouter(App);