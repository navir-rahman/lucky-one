import React, { useState } from 'react';
import './Cart.css';

const Cart = (props) => {
    const product_amount = props.addedProduct.length;

    //random number genarator
    const random = max => {
        return Math.floor(Math.random() * max);
    };

    const [randomPlace,setrnadomplace]=useState([]);

    const choeseHandel=()=>{
    const randomniumber =random(product_amount)
    setrnadomplace(props.addedProduct[randomniumber])
    }


    return (
        <div>
           <h3 className="cartTitle">
               Selected Vacation
           </h3>
           <div className="selectedProductBox">
               {/* show selected product here */}
               {
                   props.addedProduct.map((product,index)=>   
                    <div className="cart_item" key={index}>
                        <img src={product.picture} alt="" />
                        <h4>{product.name}</h4>
                    </div>
                    )
               }
               
           </div>
               {/* show chossen Item  */}
            <h3 className="cartTitle">
              Our Selection
            </h3>
            <div className="selectedProductBox">
                {/* show chossenitem  */}

                    <div className="cart_item">
                        <img src={randomPlace.picture} alt="" />
                        <h4>{randomPlace.name}</h4>
                    </div>
               
            </div>
           <button onClick={choeseHandel} className='pickRandom'>
               <p>CHOOSE ONE FOR ME</p>
           </button>
           <br />
           <button className='pickRandom'>
               <p>CHOOSE AGAIN</p>
           </button>
        </div>
    );
};

export default Cart;