import axios from 'axios';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserHeader from '../components/UserHeader';
import Context from '../context/context';
import convertDate from '../utils/dateFormat';

function SellerOrder() {
  const { userData } = useContext(Context);
  const [orders, setOrders] = useState([]);

  const resultApi = useCallback(async () => {
    console.log(userData);
    const setAxios = axios.create({
      baseURL: 'http://localhost:3001',
      headers: {
        authorization: userData.token,
        id: userData.id,
      },
    });

    const result = await setAxios.get(`/sales/seller/${userData.id}`);
    setOrders(result.data);
    console.log(result.data);
  }, [userData]);

  useEffect(() => {
    resultApi();
  }, [resultApi]);

  return (
    <div>
      <UserHeader />
      {
        orders.length > 0 && orders.map((item) => (
          <Link
            to={ {
              pathname: `/seller/orders/${item.id}`,
              state: { fromDashboard: true },
            } }
            key={ item.id }
          >
            <p
              data-testid={ `seller_orders__element-order-id-${item.id}` }
            >
              { item.id }
            </p>
            <p
              data-testid={ `seller_orders__element-delivery-status-${item.id}` }
            >
              { item.status }
            </p>
            <p
              data-testid={ `seller_orders__element-order-date-${item.id}` }
            >
              { convertDate(item.saleDate) }
            </p>
            <p
              data-testid={ `seller_orders__element-card-price-${item.id}` }
            >
              { item.totalPrice }
            </p>
            <p
              data-testid={ `seller_orders__element-card-address-${item.id}` }
            >
              { item.deliveryAddress }
            </p>
          </Link>
        ))
      }
    </div>
  );
}

export default SellerOrder;
