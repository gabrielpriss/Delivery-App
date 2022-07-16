import React from 'react';
import { useHistory } from 'react-router-dom';
import '../css/userHeader.css';

export default function UserHeader() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('user') || {});

  const exit = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <div className="user-header">
      <div className="user-first-container">
        <h2 data-testid="customer_products__element-navbar-link-products">
          Produtos
        </h2>
        <button
          type="button"
          onClick={ () => history.push('/customer/orders') }
          data-testid="customer_products__element-navbar-link-orders"
        >
          Meus Pedidos
        </button>
      </div>
      <div className="user-second-container">
        <h2 data-testid="customer_products__element-navbar-user-full-name">
          {user.name}
        </h2>
        <button
          data-testid="customer_products__element-navbar-link-logout"
          type="button"
          onClick={ exit }
        >
          Sair
        </button>
      </div>
    </div>
  );
}
