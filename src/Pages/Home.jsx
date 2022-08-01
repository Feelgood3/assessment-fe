import React, { useEffect, useState } from 'react';
import ProductList from '../components/Products';
import { getProducts } from '../Services/Products';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProducts();
      setProducts(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <ProductList list={products} />
    </div>
  );
}

export default HomePage;
