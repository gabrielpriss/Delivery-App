import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserHeader from '../components/UserHeader';
import '../css/products.css';
import ProductCard from '../components/ProductCard';

export default function Produtos() {
  const [allProducts, setAllProducts] = useState([]);

  const url = 'http://localhost:3001/products';
  const getAllProducts = () => {
    axios.get(url)
      .then((data) => setAllProducts(data.data))
      .catch((error) => console.log(error));

    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  console.log(allProducts);

  return (
    <div className="products">
      <UserHeader />
      <div className="products-container">
        {
          allProducts.map((product) => (
            <ProductCard
              key={ product.id }
              titleid={ `customer_products__element-card-title-${product.id}` }
              imgid={ `customer_products__img-card-bg-image-${product.id}` }
              priceid={ `customer_products__element-card-price-${product.id}` }
              buttonAddId={ `customer_products__button-card-add-item-${product.id}` }
              inputId={ `customer_products__input-card-quantity-${product.id}` }
              buttonRmId={ `customer_products__button-card-rm-item-${product.id}` }
              name={ product.name }
              id={ product.id }
              quantity={ 0 }
              urlImage={ product.urlImage }
              price={ product.price.replace(/\./, ',') }
            />
          ))
          // allProducts.map((produto, index) => (
          //   <div
          //     data-testid={ `customer_products__element-card-price-${index + 1}` }
          //     className="product-card"
          //     key={ index }
          //   >
          //     <h3 data-testid="customer_products__element-card-title">
          //       { produto.name }
          //     </h3>
          //     <img
          //       data-testid="customer_products__img-card-bg-image"
          //       src={ produto.urlImage }
          //       alt={ produto.name }
          //     />
          //     <h3 data-testid="customer_products__element-card-price">
          //       {`R$${produto.price}`}
          //     </h3>
          //     <div>
          //       <button
          //         data-testid="customer_products__button-card-add-item"
          //         type="button"
          //       >
          //         +
          //       </button>
          //       <input
          //         data-testid="customer_products__input-card-quantity"
          //         type="number"
          //       />
          //       <button
          //         data-testid="customer_products__button-card-rm-item"
          //         type="button"
          //       >
          //         -
          //       </button>
          //     </div>
          //   </div>
          // ))
        }
      </div>
    </div>

  );
}
