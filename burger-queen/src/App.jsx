import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ViewLogin from './components/pages/ViewLogin.jsx';
import ViewWaiterMenu from './components/pages/ViewWaiterMenu.jsx';
// import ListMenu from './components/pages/ListMenu.jsx';

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
          {/* <Route path="/Pedido">
            <ListMenu />
          </Route> */}
          <Route path="/" component={ViewLogin} />
          <Route path="/Pedidos" component={ViewLogin} />
          <Route path="/ListaPedidos" component={ViewLogin} />
        </Switch>
      </div>
    </Router>
  );
}
