import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {addTOCartHandel, product}=props;

    const {price,picture,name}=product

    return (
        <div className='product'>
            <img src={picture} alt=""></img>
            <div className='product-info'>
                <h2 className='product-name'>{name}</h2>
                <p>Price: ${price}</p>
            </div>
            <button onClick={()=>addTOCartHandel(product)}  className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
               
            </button>
        </div>
        
    );
};

export default Product;