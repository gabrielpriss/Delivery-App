import React, { useCallback, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import UserHeader from '../components/UserHeader';
import '../css/products.css';
import ProductCard from '../components/ProductCard';
import Context from '../context/context';

export default function Produtos() {
  const { itemList, setSellers } = useContext(Context);

  const history = useHistory();

  const [allProducts, setAllProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const url = 'http://localhost:3001/products';
  const getAllProducts = () => {
    axios.get(url)
      .then((data) => setAllProducts(data.data))
      .catch((error) => console.log(error));

    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  };

  const requestSellerApi = useCallback(async () => {
    axios.get('http://localhost:3001/sellers')
      .then(({ data }) => setSellers(data.users))
      .catch((error) => console.log(error));
  }, [setSellers]);

  useEffect(() => {
    getAllProducts();
    requestSellerApi();
    const total = itemList
      .reduce((acc, cv) => acc + (cv.quantity * cv.price), 0);
    setTotalPrice(total);
  }, [itemList, requestSellerApi]);

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
        }
        <button
          type="button"
          data-testid="customer_products__button-cart"
          onClick={ () => history.push('/customer/checkout') }
          disabled={ totalPrice === 0 }
        >
          <p
            data-testid="customer_products__checkout-bottom-value"
          >
            { totalPrice.toFixed(2).replace(/\./, ',') }
          </p>
        </button>
      </div>
    </div>

  );
}
