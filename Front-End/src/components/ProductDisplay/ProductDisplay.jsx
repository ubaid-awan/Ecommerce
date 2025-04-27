import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [activeSize, setActiveSize] = useState(null);
    const [activeImg, setActiveImg] = useState(0);

    // Create an array of images (in a real app, these would come from the product data)
    const productImages = [
        product.image,
        product.image,
        product.image,
        product.image
    ];

    const handleSizeClick = (size) => {
        setActiveSize(size);
    };

    const handleImageClick = (index) => {
        setActiveImg(index);
    };

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    {productImages.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt=""
                            className={activeImg === index ? 'active' : ''}
                            onClick={() => handleImageClick(index)}
                        />
                    ))}
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={productImages[activeImg]} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>

                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>

                <div className="productdisplay-right-description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquam voluptatum doloribus inventore minima placeat consequuntur eum incidunt. Expedita
                    odio explicabo, nemo modi temporibus voluptate consectetur velit dolorum libero sapiente!
                </div>

                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-size-list">
                        <div
                            className={`productdisplay-right-size-item ${activeSize === 'S' ? 'active' : ''}`}
                            onClick={() => handleSizeClick('S')}
                        >S</div>
                        <div
                            className={`productdisplay-right-size-item ${activeSize === 'M' ? 'active' : ''}`}
                            onClick={() => handleSizeClick('M')}
                        >M</div>
                        <div
                            className={`productdisplay-right-size-item ${activeSize === 'L' ? 'active' : ''}`}
                            onClick={() => handleSizeClick('L')}
                        >L</div>
                        <div
                            className={`productdisplay-right-size-item ${activeSize === 'XL' ? 'active' : ''}`}
                            onClick={() => handleSizeClick('XL')}
                        >XL</div>
                    </div>
                </div>

                <div className="productdisplay-right-button">
                    <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
                    <p className='productdisplay-right-category'><span>Category:</span> {product.category}</p>
                    <p className='productdisplay-right-category'><span>Tags:</span> {product.category}, T-shirt, BestSeller</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay