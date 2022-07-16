import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserHeader from '../components/UserHeader';
import convertDate from '../utils/dateFormat';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/sales')
      .then((res) => setOrders(res.data));
  });

  return (
    <div>
      <UserHeader />
      {
        orders.length > 0 && orders.map((item) => (
          <Link
            to={ {
              pathname: `/customer/orders/${item.id}`,
              state: { fromDashboard: true },
            } }
            key={ item.id }
            data-testid={ `customer_products__element-order-date-${item.id}` }
          >
            <p
              data-testid={ `customer_orders__element-order-id-${item.id}` }
            >
              { item.id }
            </p>
            <p
              data-testid={ `customer_orders__element-delivery-status-${item.id}` }
            >
              { item.status }
            </p>
            <p
              data-testid={ `customer_orders__element-order-date-${item.id}` }
            >
              { convertDate(item.saleDate) }
            </p>
            <p
              data-testid={ `customer_orders__element-card-price-${item.id}` }
            >
              { item.totalPrice.replace('.', ',') }
            </p>
          </Link>
        ))
      }
    </div>
  );
}
