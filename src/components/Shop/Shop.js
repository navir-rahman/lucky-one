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
            <div>
                <h1 className='App'>Find your next vacation</h1>
                <div className="productContainer">
                    {
                        //call product component
                        products.map(product => <Product key={product._id} product={product} addTOCartHandel={addTOCartHandel}></Product>)
                    }


                </div>
                                {/* question and answer  */}
                <div className="padding">
                    <h2 className='App'>Question and answer</h2>
                    <div className="questionnswer">
                        <h3>How react works?</h3>
                        <p>React uses lots of reusable component to create a single page. it also creates a vertual Dom. when user makes any changes react creates another vertual DOM
                            and compares the changes between the old and the new DOM. after that react only updates the area where changes ocured.
                        </p>
                        <h3>How react works?</h3>
                        <p>props is object of arbitary inputs . react function acpects as arguments. State is data that changes ovr the lifetime of a component.
                            props are arguments that we can pass to a component, and state is something that is managed within the component and can change over time.
                            porps are static and state are dynamic.
                        </p>
                    </div>
                </div>
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