import React from 'react';
import { useHistory } from 'react-router-dom';
import '../css/userHeader.css';

export default function UserHeader() {
  const history = useHistory();
  const exit = () => {
    localStorage.clear();
    history.push('/register');
  }

  return (
    <div className='user-header'>
      <div>
        <h2>Produtos</h2>
        <h2>Meus Pedidos</h2>
      </div>
      <div>
        <h2>Usuario</h2>
        <button type="button" onClick={ exit }>
          Sair
        </button>
      </div>
    </div>
  );
}
