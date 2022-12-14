import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = ({product,handleAddToCart}) => {
// const Product = (props) => {
  
  // const{product,handleAddToCart}=props;
    const { name,img, seller, price, ratings}= product;
    // const { name,img, seller, price, ratings}= props.product;

    return ( 
        <div className='product'>
          <img src={img} alt="" ></img>
        <div className='product-info'>
            <p className='product-name'>{name}</p>
          <p><small>Price:${price}</small></p>
          <p><small>Seller:{seller}</small></p>
          <p><small>Ratings:{ratings}</small></p>
        </div>
        <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
        {/* <button onClick={()=>props.handleAddToCart(props.product)} className='btn-cart'> */}
            <p className='btn-text'>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           
        </button>
        </div>
    );
};

export default Product;