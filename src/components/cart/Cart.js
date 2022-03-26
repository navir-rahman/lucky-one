import React from 'react';
import './Cart.css';

const Cart = (props) => {
    //console.log(props.addedProduct);
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

                    {/* <div className="cart_item">
                        <img src={product.picture} alt="" />
                        <h3>{product.name}</h3>
                    </div> */}
           </div>

           <button className='pickRandom'>
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