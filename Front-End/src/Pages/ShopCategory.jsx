import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../components/Assets/dropdown_icon.png';
import Item from '../components/Item/Item';

const ShopCategory = ({ banner, category }) => {
  const { all_Product } = useContext(ShopContext);
  console.log("products :" + all_Product  )

  const filteredProducts = all_Product.filter(item => item.category === category);

  return (
    <div className="shop-category">
      <img src={banner} alt="Category Banner" className='shop-banner'/>

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{filteredProducts.length}</span> out of {all_Product.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="Sort Dropdown" />
        </div>
      </div>

      <div className="shopcategory-products">
        {filteredProducts.map((item , index ) => (
          <Item
            key={index}
            image={item.image}
            name={item.name}
            id={item.id}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
