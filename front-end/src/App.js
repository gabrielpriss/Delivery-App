import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import OrdersDetais from './pages/OrdersDetails';
import Produtos from './pages/Produtos';
import Register from './pages/Register';
import Orders from './pages/Orders';
import Admin from './pages/Admin';
import SellerOrder from './pages/SellerOrder';
import SellerOrderDetails from './pages/SellerOrderDetails';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/customer/orders/:id" component={ OrdersDetais } />
        <Route exact path="/seller/orders/:id" component={ SellerOrderDetails } />
        <Redirect exact from="/" to="/login" />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/customer/products" component={ Produtos } />
        <Route exact path="/customer/checkout" component={ Checkout } />
        <Route exact path="/customer/orders" component={ Orders } />
        <Route exact path="/admin/manage" component={ Admin } />
        <Route exact path="/seller/orders" component={ SellerOrder } />
      </Switch>
    </BrowserRouter>
  );
}
