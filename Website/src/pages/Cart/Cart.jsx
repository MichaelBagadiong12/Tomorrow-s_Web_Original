import React from 'react'
import './Cart.css'
import { UseCart } from './CartFunction';
import { ImCross } from "react-icons/im";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { BiCartAlt, BiUser } from "react-icons/bi";
import { Link } from 'react-router-dom';


const Cart = () => {

  const {cartProductItems, openCart, setopenCart, removeItemFromCart, addQty, minusQty} = UseCart();

  const totalPrice = cartProductItems.reduce((setValue, item) => setValue + item.price * item.qty, 0); 

  return (
    <>
    <div className={`cart-container ${openCart ? "open" : ''}`}>
      <div className='cart-header'>
        <h1>My Cart</h1>
        <button style={{ all: 'unset', marginRight: '10px', cursor: 'pointer' }} className='close-button' onClick={() => setopenCart(false)}><ImCross></ImCross></button>
      </div>

      <div className='cart-content'>
        {cartProductItems.length !== 0 ? (
          cartProductItems.map( item => (
            <div key={item.id} className="cart-items">
              <img src={item.image} alt=""></img>
              <div className='product-details'>
                <h1>{item.name}</h1>
                <p style={{marginTop: '4px'}}>Price: {item.price} AED</p>
                <div className='quantity-buttons'>
                  <button className='minus-button' style={{all: 'unset', height: '28px', width: '28px', backgroundColor: '#C79228', borderRadius: '15px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'}} onClick={() => minusQty(item.id)}><FaMinus></FaMinus></button>
                  <p>{item.qty}</p>
                  <button style={{all: 'unset', height: '28px', width: '28px', backgroundColor: '#C79228', borderRadius: '15px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'}} onClick={() => addQty(item.id)}><FaPlus></FaPlus></button>
                </div>
                <div className='remove-item'>
                  <button className='remove-button-cart' onClick={() => removeItemFromCart(item.id)}><FaTrashCan></FaTrashCan>Remove Item</button>
                </div>
              </div>
            </div>
          ))
      ):(
        <div className='cart-empty'>
          <BiCartAlt className='cart-icon' />
          <h1>Cart is Empty</h1>
        </div>
      )}
      </div>

      {cartProductItems.length > 0 && (
        <div className='cart-total-price'>
          <div className='total'>
            <h1>Total</h1>
            <p>{totalPrice.toFixed(2)} AED</p>
          </div>
          <Link to="/orderplacement"><button className='checkout-button'>Proceed to Payment</button></Link>
        </div>
      )
      }




    </div>
    </>
  )
}

export default Cart
