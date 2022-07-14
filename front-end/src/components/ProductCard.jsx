import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function ProductCard(props) {
  const { titleid, imgid, priceid,
    buttonAddId, inputId, buttonRmId,
    name, urlImage, price } = props;
  const [newQuantity, setNewQuantity] = useState(0);

  const teste = (event) => {
    event.preventDefault();
    const cart = JSON.parse(localStorage.getItem('cart'));
    const priceNumber = Number(price.replace(',', '.'));

    setNewQuantity(newQuantity + 1);

    const items = {
      name,
      quantity: newQuantity,
      unitPrice: priceNumber,
      totalPrice: priceNumber * newQuantity,
    };

    const newCart = [...cart, items];

    return localStorage.setItem('cart', JSON.stringify(newCart));
  };

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
            onClick={ (event) => teste(event) }
          >
            +
          </button>
          <input
            data-testid={ inputId }
            type="number"
            value={ newQuantity }
            onChange={ ({ target: { value } }) => setNewQuantity(Number(value)) }
          />
          <button
            data-testid={ buttonRmId }
            type="button"
            onClick={ () => setNewQuantity(newQuantity === 0 ? 0 : newQuantity - 1) }
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
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
