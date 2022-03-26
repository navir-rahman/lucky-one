import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import Cart from '../cart/Cart';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [addedProduct, setaddedProduct] = useState([]);

    useEffect(()=>{
        fetch('fakeDB.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])


    //use state to set added product
    //function for add to catr btn
    const addTOCartHandel= (selectedProduct) =>{
        let newCart= [];

        const productExists = addedProduct.find(product=>product._id === selectedProduct._id);
        console.log(productExists)
        console.log(selectedProduct.id)
        if(!productExists){
            newCart=[...addedProduct, selectedProduct];
            setaddedProduct(newCart)
        }else{
            alert("product already selected")
    }
    }
    //console.log(addedProduct)

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
                    <Cart addedProduct={addedProduct}></Cart>
                }
            </div>
            
        </div>
    );
};

export default Shop;