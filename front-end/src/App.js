import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Produtos from './pages/Produtos';
import Register from './pages/Register';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/customer/products" component={ Produtos } />
        <Route exact path="/customer/checkout" component={ Checkout } />
      </Switch>
    </BrowserRouter>
  );
}
