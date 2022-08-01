import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';

function ProductList(props) {
  const { list } = props;
  return (
    <div className="product-list">
      {list.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

ProductList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
};

export default ProductList;
