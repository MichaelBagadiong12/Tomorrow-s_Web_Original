import React from 'react';
import './Orderplacement.css';
import { UseCart } from '../Cart/CartFunction';
import { assets } from '../../assets/asset';
import { Link } from 'react-router-dom';
import { IoReturnUpBack } from "react-icons/io5";

const Orderplacement = () => {
  const { cartProductItems } = UseCart();
  const totalPrice = cartProductItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <>

    <div className='back-button'>
        <Link to='/home'><IoReturnUpBack size="2.2em"></IoReturnUpBack></Link>
        <span>Back</span>
    </div>

    <div className='logo-payment'>
      <img src={assets.logo} alt=""></img>
      <h1>Gym Warrior</h1>
    </div>
    <div className='payment-container'>
      <h1>Checkout</h1>
      <div className='payment-form-content'>
        <form className='payment-form'>
          <h2>Contact Details</h2>
          <div className="input-row">
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Phone Number" required />
          </div>
          <input type="text" placeholder="Full Name" required />

          <h2>Delivery Address</h2>
          <input type="text" placeholder="Address" required />
          <input type="text" placeholder="Building Name" required />
          <div className='input-row'>
            <input type="text" placeholder="City" required />
            <input type="text" placeholder="Room Number" required />
          </div>

          <h2>Payment</h2>
          <p style={{ fontSize: '14px', color: '#666' }}>All transactions are secure and encrypted.</p>

          <div className='payment-card-tab'>

            <label className="payment-card-header">
              <div className='payment-label'>
                <input type="radio"  className="edit-radio" name="payment-card-select" value="debit"></input>
                <span className='radio-circle'></span>
                <h4>Debit Card</h4>
              </div>
                <div className='card-image'>
                  <img src={assets.livcard} alt="LivCard" />
                  <img src={assets.mastercard} alt="Mastercard" />
                  <img src={assets.visa} alt="Visa" />
                </div>
            </label>

            <label className="payment-card-header">
              <div className='payment-label'>
                <input type="radio" name="payment-card-select" value="credit"></input>
                <span className='radio-circle'></span>
                <h4>Credit Card</h4>
              </div>

              <div className='card-image'>
                <img src={assets.mastercredit} alt="MasterCredit" />
                <img src={assets.visacredit} alt="VisaCredit" />
              </div>
            </label>

            <input type="text" placeholder="Card Number" required />
            <div className="card-details">
              <input type="text" placeholder="MM/YY" required />
              <input type="text" placeholder="CVV" required />
            </div>
            <input type="text" placeholder="Name on Card" required />
          </div>

          <button type="submit">Pay Now</button>
        </form>
        <div className='order-summary-container'>
          <div className="order-summary">
            <h2>Order Summary</h2>
            {cartProductItems.map(item => (
              <div key={item.id} className="summary-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>{item.qty} × {item.price} AED</p> {/*Item's count and its price */}
                </div>
              </div>
            ))}
            <hr />
            <h3>TOTAL: {totalPrice.toFixed(2)} AED</h3> {/*For decimal result */}
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default Orderplacement;