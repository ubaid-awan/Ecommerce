import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import Breadcrums from '../components/Breadcrums/Breadcrums';
import { ShopContext } from '../Context/ShopContext';
import DescpritionBox from '../components/DescpritionBox/DescpritionBox';


const Product = () => {
  const { all_Product } = useContext(ShopContext);
  const { id } = useParams();
  console.log("Product ID:", id);

  const product = all_Product.find((e) => e.id === Number(id));

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <p>Sorry, the product you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescpritionBox />
    </div>
  )
}

export default Product