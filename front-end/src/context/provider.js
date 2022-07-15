import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

function CartProvider({ children }) {
  const [itemList, setItemList] = useState([]);
  const [totalPrice, setTotalPrice] = useState('');

  useEffect(() => {
    setItemList([]);
  }, []);

  return (
    <Context.Provider
      value={ {
        itemList,
        setItemList,

        totalPrice,
        setTotalPrice,
      } }
    >
      {children}
    </Context.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
