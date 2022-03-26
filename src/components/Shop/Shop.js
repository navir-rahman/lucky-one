import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import Cart from '../cart/Cart';
import './Shop.css';

const Shop = () => {
    //set and store api product data
    const [products, setProducts] = useState([]);
    
    //set and store cart product data
    const [addedProduct, setaddedProduct] = useState([]);
    
    //get api data
    useEffect(()=>{
        fetch('fakeDB.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])

    //function for add to catr btn
    const addTOCartHandel= (selectedProduct) =>{
        let newCart= [];

        const productExists = addedProduct.find(product=>product._id === selectedProduct._id);
        if(!productExists){
            newCart=[...addedProduct, selectedProduct];
            setaddedProduct(newCart)
        }else{
            alert("product already selected")
        }
    }
    //function for clearing all data
    const clearcart=()=>{
        setaddedProduct([]);
    }

    return (
        <div className='shopContainer'>
            <div className="productContainer">
                {
                    //call product component
                    products.map(product => <Product key={product._id} product={product} addTOCartHandel={addTOCartHandel}></Product>)
                }
            </div>
            <div className="cartContainer">
                {
                    //call cart and send addedProduct data to show on the frontend
                    <Cart clearfuntion={clearcart}  addedProduct={addedProduct}></Cart>
                }
            </div>
            
        </div>
    );
};

export default Shop;