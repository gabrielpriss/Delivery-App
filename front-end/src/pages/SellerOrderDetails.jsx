import axios from 'axios';
import React, { useCallback, useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import UserHeader from '../components/UserHeader';
import Context from '../context/context';
import {
  sellerItem,
  sellerQty,
  sellerStatus,
  subTotalSeller,
  unitPriceSeller,
} from '../utils/dataTestIds';
import convertDate from '../utils/dateFormat';

function SellerOrderDetails() {
  const params = useParams();
  const [order, setOrder] = useState([]);
  const { userData } = useContext(Context);
  const [priceOrder, setPriceOrder] = useState(false);
  const [prepare, setPrepare] = useState(false);
  const [enviar, setEnviar] = useState(false);

  const requestApi = useCallback(async () => {
    const setAxios = axios.create({
      baseURL: 'http://localhost:3001',
      headers: { authorization: userData.token },
    });

    const result = await setAxios.get(`/sales/order/${params.id}`);
    setOrder(result.data);
    console.log('aqui:', result.data);
    setPriceOrder(true);
  }, [params.id, userData.token]);

  useEffect(() => {
    console.log(order.status);
    if (order.status === 'Preparando') setPrepare(true);
    if (order.status === 'Pendente') setEnviar(true);
    if (order.status === 'Em Trânsito') {
      setEnviar(true);
      setPrepare(true);
    }
  }, [order.status]);

  const setTotalPrice = () => {
    if (order.products) {
      const totalPrice = order.products.reduce((acc, item) => {
        const value = acc + (item.price * item.quantity);
        return value;
      }, 0);
      return totalPrice;
    }
  };

  const changeStatus = useCallback(async (status) => {
    const setAxios = axios.create({
      baseURL: 'http://localhost:3001',
      headers: { authorization: userData.token },
    });
    await setAxios.patch(`/sales/status/${params.id}`, {
      status,
    });
    setPrepare(true);
  }, [params.id, userData.token]);

  useEffect(() => {
    requestApi();
  }, [changeStatus, requestApi]);

  return (
    <div>
      <UserHeader />
      <span
        data-testid="seller_order_details__element-order-details-label-order-id"
      >
        { params.id }
      </span>
      <span
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        { convertDate(order.saleDate) }
      </span>
      <span
        data-testid={ sellerStatus }
      >
        { order.status }
      </span>
      <button
        type="button"
        data-testid="seller_order_details__button-preparing-check"
        disabled={ prepare }
        onClick={ () => changeStatus('Preparando') }
      >
        PREPARAR PEDIDO
      </button>
      <button
        type="button"
        data-testid="seller_order_details__button-dispatch-check"
        disabled={ enviar }
        onClick={ () => changeStatus('Em Trânsito') }
      >
        SAIU PARA ENTREGA
      </button>
      {
        order.products && order.products.map((item, index) => (
          <div
            key={ item.id }
          >
            <span
              data-testid={ `${sellerItem}${index}` }
            >
              { index + 1 }
            </span>
            <span
              data-testid={ `seller_order_details__element-order-table-name-${index}` }
            >
              { item.name }
            </span>
            <p
              data-testid={ `${sellerQty}${index}` }
            >
              { item.quantity }
            </p>
            <p
              data-testid={ `${unitPriceSeller}${index}` }
            >
              { item.price.replace('.', ',') }
            </p>
            <p
              data-testid={ `${subTotalSeller}${index}` }
            >
              {
                (Number(item.price) * Number(item.quantity)).toFixed(2).replace('.', ',')
              }
            </p>
          </div>
        ))
      }
      <button
        type="button"
        data-testid="seller_order_details__element-order-total-price"
      >
        { priceOrder && `TOTAL: ${setTotalPrice().toFixed(2).replace('.', ',')}` }
      </button>
    </div>
  );
}

export default SellerOrderDetails;
