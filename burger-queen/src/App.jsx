import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ViewLogin from './components/pages/ViewLogin.jsx';

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/">
            <ViewLogin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Bienvenido Mesero!!!</h2>;
}
