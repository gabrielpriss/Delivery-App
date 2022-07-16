import axios from 'axios';
import React, { useContext, useEffect, useCallback, useState } from 'react';
import { useRouteMatch, useParams } from 'react-router-dom';
import UserHeader from '../components/UserHeader';
import Context from '../context/context';
import { itemId, orderId, quantityId, statusId, subTotalId } from '../utils/dataTestIds';
import convertDate from '../utils/dateFormat';

export default function OrdersDetais() {
  const [priceOrder, setPriceOrder] = useState(0);

  const { userData } = useContext(Context);
  const params = useParams();
  const router = useRouteMatch();

  const [order, setOrder] = useState([]);

  const getApiDetails = useCallback(async () => {
    const setAxios = axios.create({
      baseURL: 'http://localhost:3001',
      headers: { authorization: userData.token },
    });

    const result = await setAxios.get(`/sales/order/${params.id}`);
    setOrder(result.data);
  }, [userData, params]);

  const setTotalPrice = useCallback(() => {
    if (order.products) {
      const totalPrice = order.products.reduce((acc, item) => {
        const value = acc + (item.price * item.quantity);
        return value;
      }, 0);
      setPriceOrder(totalPrice);
    }
  }, [order]);

  useEffect(() => {
    getApiDetails();
    setTotalPrice();
  }, [getApiDetails, setTotalPrice]);

  return (
    <div>
      <UserHeader />
      <p
        data-testid={ `${orderId}` }
      >
        { params.id }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        { order.sellerName }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        { convertDate(order.saleDate) }
      </p>
      <p
        data-testid={ statusId }
      >
        { order.status }
      </p>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
        disabled={ router.path.split('/')[1] === 'customer' }
      >
        MARCAR COMO ENTREGUE
      </button>
      {
        order.products && order.products.map((item, index) => (
          <div
            key={ item.id }
          >
            <p
              data-testid={ `${itemId}${index}` }
            >
              { index + 1 }
            </p>
            <p
              data-testid={ `customer_order_details__element-order-table-name-${index}` }
            >
              { item.name }
            </p>
            <p
              data-testid={ `${quantityId}${index}` }
            >
              { item.quantity }
            </p>
            <p
              data-testid={ `${subTotalId}${index}` }
            >
              { item.price.replace('.', ',') }
            </p>
            <p
              data-testid={ `customer_order_details__element-order-total-price-${index}` }
            >
              {
                (Number(item.price) * Number(item.quantity)).toFixed(2).replace('.', ',')
              }
            </p>
          </div>))
      }
      <button
        type="button"
        data-testid="customer_order_details__element-order-total-price"
      >
        { `TOTAL: ${priceOrder.toFixed(2).replace('.', ',')}` }
      </button>
    </div>
  );
}
