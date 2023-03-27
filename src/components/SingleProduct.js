import React from 'react'
import { useParams } from 'react-router-dom';
import { Start_CDN } from '../utils/cdn';
import "../assests/styles/single-product.css"
import useSingleProduct from '../utils/useSingleProduct';
import Shimmer from './Shimmer';

const SingleProduct = () => {

    const { id } = useParams();

    const singleProduct = useSingleProduct(id);

    return (!singleProduct) ? <Shimmer /> : (
        <div className="product-page">
            <div className="product-image">
                <img src={singleProduct?.image} alt="ProductImage" />
            </div>
            <div className="product-info">
                <h1 className="product-title">{singleProduct?.title}</h1>
                <p className="product-description">{singleProduct?.description}</p>
                <p className="product-price">$10.00</p>
                <form>
                    <label for="quantity">Quantity: 10</label>
                    <input type="number" id="quantity" name="quantity" value="1" min="1" max="10" />
                    <button type="submit" className="add-to-cart-btn">Add to Cart</button>
                </form>
                <p className="product-description">{singleProduct?.rating?.rate} <img className="star" src={Start_CDN} alt="star" /> rating by {singleProduct?.rating?.count} person</p>
            </div>
        </div>
    )
}

export default SingleProduct