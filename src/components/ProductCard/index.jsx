import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { randomNumber, setNumbers } from '../../Services/randomNumber';
import './styles.css';

function ProductCard(props) {
  const { product } = props;
  const [counter, setCounter] = useState(randomNumber);

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div key={product.id} className="card-container">
      <div className="card__image-container">
        <img className="card__image__image" src={product.image} alt="item" />
      </div>
      <div>
        <h1 className="card__title">{product.title}</h1>
      </div>
      <span className="card__timer">{setNumbers(counter)}</span>
      <div className="card__button-container">
        <Link to={`/detail/${product.id}`} className={!counter ? 'disabled' : 'card__button__link'}>Details</Link>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape().isRequired,
};

export default ProductCard;
