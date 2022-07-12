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
        <h2>Produtos</h2>
        <h2>Meus Pedidos</h2>
      </div>
      <div className="user-second-container">
        <h2>{user.name}</h2>
        <button type="button" onClick={ exit }>
          Sair
        </button>
      </div>
    </div>
  );
}
