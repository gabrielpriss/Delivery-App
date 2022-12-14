import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/context';

export default function ProductCard(props) {
  const { id, titleid, imgid, priceid,
    buttonAddId, inputId, buttonRmId,
    name, urlImage, price } = props;

  const {
    itemList,
    setItemList,
  } = useContext(Context);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const product = {
      productId: id,
      name,
      quantity: Number(count),
      price: Number(price.split(',').join('.')),
      subTotal: Number(price.split(',').join('.')) * Number(count),
    };

    let allProducts = [...itemList];

    allProducts.forEach((produto, index) => {
      if (produto.productId === product.productId) {
        allProducts[index] = product;
      }
    });

    const existProduct = allProducts.some((some) => id === some.productId);
    if (count > 0 && !existProduct) {
      allProducts = [...itemList, product];
    }

    setItemList(allProducts);
    console.log(allProducts);
  }, [count]);

  function handleChange(e) {
    if (Number(e.target.value)) {
      setCount(Number(e.target.value));
    }
  }

  return (
    <div>
      <div
        className="product-card"
      >
        <h3 data-testid={ titleid }>
          { name }
        </h3>
        <img
          data-testid={ imgid }
          src={ urlImage }
          alt={ name }
        />
        <h3 data-testid={ priceid }>
          { price }
        </h3>
        <div>
          <button
            data-testid={ buttonAddId }
            type="button"
            onClick={ () => setCount(count + 1) }
          >
            +
          </button>
          <input
            data-testid={ inputId }
            value={ Number(count) }
            onChange={ handleChange }
          />
          <button
            data-testid={ buttonRmId }
            type="button"
            onClick={ () => count > 0 && setCount(count - 1) }
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgid: PropTypes.string.isRequired,
  titleid: PropTypes.string.isRequired,
  priceid: PropTypes.string.isRequired,
  buttonAddId: PropTypes.string.isRequired,
  buttonRmId: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
