import React from 'react'
import './Shop.css'
import { assets } from '../../assets/asset'
import { BiCartAlt, BiUser } from "react-icons/bi";
import { products } from '../../assets/asset';
import { UseCart } from '../Cart/CartFunction';


const Shop = () => {
  const { addToCart, setopenCart } = UseCart();

  return (
    <>
    <div className='Shop-title'>
        <h1>Gym Warrior Premium Supplements</h1>
        <p>Shop high-quality whey proteins, creatine, and more—offering the perfect blend of value and quality.</p>
    </div>
    
    <div className='shop-page-container'>
      {products.map(itemProduct => (
        <div className='card-product' key={itemProduct.id}>
          <img className="image-product" src={itemProduct.image} />
          <h1 className='name-product'>{itemProduct.name}</h1>
          <p className='size-product'>1 size</p>
          <p className='price-product'>{itemProduct.price} AED</p>  {/* auto open the cart */}
          <button className='add-to-cart' onClick={() => {addToCart(itemProduct); setopenCart(true);}} /*It opens the cart when you clicked add to cart button */
          ><BiCartAlt size="1.4em" /> Add to Cart</button>
        </div>
      ))}
    </div>
    </>
  );
};

export default Shop;