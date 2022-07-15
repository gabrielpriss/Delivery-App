import React, { useEffect, useContext, useCallback } from 'react';
import Context from '../context/context';

export default function Checkout() {
  const {
    itemList,
    // setItemList,
    totalPrice,
    setTotalPrice,
  } = useContext(Context);

  const priceTotal = useCallback(() => {
    const total = itemList
      .reduce((acc, cv) => acc + (cv.quantity * cv.price), 0);
    setTotalPrice(total);
  }, [itemList, setTotalPrice]);

  useEffect(() => {
    priceTotal();
  }, [priceTotal, totalPrice]);

  return (
    <div>
      <p
        data-testid="customer_checkout__element-order-total-price"
      >
        { totalPrice }
      </p>
    </div>
  );
}
