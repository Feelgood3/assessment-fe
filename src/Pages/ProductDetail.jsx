import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../Services/Products';
import './styles.css';

function DetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct(id)
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="product-detail__container">
      {
       product.id === Number(id)
         ? (
           <div className="product-detail" key={product.id}>
             <div className="product-detail__image">
               <img src={product.image} alt={product.title} />
             </div>
             <div className="product-detail__info">
               <h1 className="product-detail__title">{product.title}</h1>
               <h2 className="product-detail__price"><strong>$ {product.price}</strong></h2>
               <p className="product-detail__category"><strong>Category: </strong>{product.category}</p>
               <p className="product-detail__description">{product.description}</p>
               <span className="product-detail_rating"><strong>Rating: </strong>{product.rating.rate} ⭐</span>
             </div>
           </div>
         )
         : null
      }
    </div>
  );
}

export default DetailPage;
