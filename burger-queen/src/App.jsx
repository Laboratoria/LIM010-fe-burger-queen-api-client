import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ViewLogin from './components/pages/ViewLogin.jsx';
import ViewWaiterMenu from './components/pages/ViewWaiterMenu.jsx';

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Home">
            <ViewWaiterMenu />
          </Route>
          <Route path="/" component={ViewLogin} />
        </Switch>
      </div>
    </Router>
  );
}
