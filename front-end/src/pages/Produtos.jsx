import React from 'react';
import UserHeader from '../components/UserHeader';
import { produtos } from '../mocks/produtos';
import '../css/products.css';

export default function Produtos() {
  return (
    <div className="products">
      <UserHeader />
      <div className="products-container">
        {
          produtos.map((produto, index) => (
            <div
              data-testid={ `customer_products__element-card-price-${index + 1}` }
              className="product-card"
              key={ index }
            >
              <h3>{ produto.name }</h3>
              <img src={ produto.urlImage } alt={ produto.name } />
              <h3>{`R$${(produto.price).toFixed(2)}`}</h3>
            </div>
          ))
        }
      </div>
    </div>

  );
}
