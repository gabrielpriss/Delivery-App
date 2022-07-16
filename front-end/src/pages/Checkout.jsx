import axios from 'axios';
import React, { useEffect, useContext, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context/context';

export default function Checkout() {
  const history = useHistory();

  const [address, setAddress] = useState('');
  const [numberAddress, setNumberAdress] = useState('');
  const {
    itemList,
    setItemList,
    totalPrice,
    setTotalPrice,
    userData,
    setUserData,
    sellers,
  } = useContext(Context);

  useEffect(() => {
    const getData = localStorage.getItem('user');
    setUserData({
      token: JSON.parse(getData).token,
      email: JSON.parse(getData).email,
    });

    console.log(sellers);
  }, [sellers, setUserData]);

  const clearStates = () => {
    setTotalPrice(0);
    setAddress('');
    setNumberAdress('');
    setItemList([]);
  };

  const createSale = async () => {
    console.log(sellers);
    const newSale = {
      userEmail: userData.email,
      sellerEmail: sellers[0].email,
      totalPrice,
      deliveryAddress: address,
      deliveryNumber: numberAddress,
      status: 'Pendente',
    };

    const requestApi = axios.create({
      baseURL: 'http://localhost:3001',
      headers: { authorization: userData.token },
    });

    const { data: { saleId } } = await requestApi.post('/sales', newSale);

    console.log(saleId);
    const body = { saleId, itens: itemList };
    const { data } = await requestApi.post('/salesproducts/many', body);

    clearStates();
    history.push(`/customer/orders/${data}`);
  };

  const priceTotal = useCallback(() => {
    const total = itemList
      .reduce((acc, cv) => acc + (cv.quantity * cv.price), 0);
    setTotalPrice(total);
  }, [itemList, setTotalPrice]);

  const removeItem = (id) => {
    const returnItensFiltred = itemList
      .filter((item) => item.productId !== Number(id));

    setItemList(returnItensFiltred);
  };

  useEffect(() => {
    priceTotal();
  }, [priceTotal]);

  return (
    <div>
      {
        itemList.map((item, index) => (
          <div
            key={ item.name }
          >
            <p
              data-testid={
                `customer_checkout__element-order-table-item-number-${index}`
              }
            >
              {index + 1}

            </p>
            <p
              data-testid={ `customer_checkout__element-order-table-name-${index}` }
            >
              { item.name }
            </p>
            <p
              data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
            >
              { item.quantity }
            </p>
            <p
              data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
            >
              { item.price.toFixed(2).split('.').join(',') }
            </p>
            <p
              data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
            >
              { item.subTotal.toFixed(2).split('.').join(',') }
            </p>
            <button
              onClick={ () => removeItem(item.productId) }
              type="button"
              data-testid={ `customer_checkout__element-order-table-remove-${index}` }
            >
              Remover
            </button>
          </div>
        ))
      }
      <button
        type="button"
      >
        <p
          data-testid="customer_checkout__element-order-total-price"
        >
          { totalPrice && `R$ ${totalPrice.toFixed(2).split('.').join(',')}` }
        </p>
      </button>
      <button
        type="button"
        data-testid="customer_products__checkout-bottom-value"
      >
        Checkout
      </button>

      <div>
        <select
          data-testid="customer_checkout__select-seller"
          onChange={ ({ target: { value } }) => setSellerMail(value) }
        >
          {
            sellers.length > 0 && sellers.map((seller) => (
              <option
                key={ seller }
                value={ seller.email }
              >
                { seller.name }
              </option>
            ))
          }
        </select>
        <input
          type="text"
          data-testid="customer_checkout__input-address"
          value={ address }
          onChange={ ({ target: { value } }) => setAddress(value) }
        />
        <input
          data-testid="customer_checkout__input-addressNumber"
          value={ numberAddress }
          onChange={ ({ target: { value } }) => setNumberAdress(value) }
        />
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
          onClick={ createSale }
        >
          Finalizar Pedido
        </button>
      </div>
    </div>
  );
}
