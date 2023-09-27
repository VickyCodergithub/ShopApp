/** @format */

import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import { FaStar } from 'react-icons/fa';
import { Label } from '@material-ui/icons';
export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className='product'>
      <img src={productImage} />
      <div className='description'>
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <div>
        {[...Array(5)].map((star) => {
          return (
            <Label>
              <input type='radio' name='rating' />
              <FaStar size={50} />
            </Label>
          );
        })}
      </div>
      <button className='addToCartBttn' onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
