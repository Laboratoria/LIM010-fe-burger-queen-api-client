import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ViewLogin from './components/pages/ViewLogin.jsx';
import ViewWaiterMenu from './components/pages/ViewWaiterMenu.jsx';
// import PintandoListPedidos from './components/pieces/PintandoListPedidos.jsx';
// import ViewAdminUser from './components/pages/ViewAdminUser.jsx';
// import ViewKitchen from './components/pages/ViewKitchen.jsx';
import StartView from './components/pages/StartView.jsx';
import ViewListOrdersWaiter from './components/pages/ViewListOrdersWaiter.jsx';
import ViewKitchen from './components/pages/ViewKitchen.jsx';
import ViewAdminUser from './components/pages/ViewAdminUser.jsx';
import ViewAdminProduct from './components/pages/ViewAdminProduct.jsx';

export default function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" component={ViewLogin} exact />
        <Route path="/Home" component={StartView} />
        <Route path="/Pedidos" component={ViewWaiterMenu} />
        <Route path="/ListaPedidos" component={ViewListOrdersWaiter} />
        <Route path="/Cocinero" component={ViewKitchen} />
        <Route path="/Usuarios" component={ViewAdminUser} />
        <Route path="/CerrarSesion" component={ViewLogin} />
        <Route path="/Productos" component={ViewAdminProduct} />
      </Switch>
    </Router>
  );
}
