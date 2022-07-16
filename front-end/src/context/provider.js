import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

function CartProvider({ children }) {
  const [itemList, setItemList] = useState([]);
  const [totalPrice, setTotalPrice] = useState('');
  const [userData, setUserData] = useState('');
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    setItemList([]);
  }, []);

  return (
    <Context.Provider
      value={ {
        itemList,
        setItemList,

        sellers,
        setSellers,

        userData,
        setUserData,

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
