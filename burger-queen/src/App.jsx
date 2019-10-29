import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ViewLogin from './components/pages/ViewLogin.jsx';
// import ViewWaiterMenu from './components/pages/ViewWaiterMenu.jsx';
// import PintandoListPedidos from './components/pieces/PintandoListPedidos.jsx';
// import ViewAdminUser from './components/pages/ViewAdminUser.jsx';
import ViewKitchen from './components/pages/ViewKitchen.jsx';
// import ViewWaiterMenu from './components/pages/ViewListOrdersWaiter.jsx';

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Home">
            <ViewKitchen />
          </Route>
          <Route path="/" component={ViewLogin} />
          <Route path="/Pedidos" component={ViewLogin} />
          <Route path="/ListaPedidos" component={ViewLogin} />
        </Switch>
      </div>
    </Router>
  );
}
