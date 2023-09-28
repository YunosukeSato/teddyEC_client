'use client'

import NavBar from '@/app/(landingpage)/components/NavBar';
import CartItem from '@/app/cart/components/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { Product, addItem,removeAllItems, removeItem, updateQuantity } from '../store/cartSlice';
import {RootState} from "../store/store";
import Link from 'next/link';
import { useEffect } from 'react';

const page = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePurchase = () => {
    alert(`move to payment page`);
  };

  const handleRemove = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemoveAll = () => {
    dispatch(removeAllItems());
  };

  useEffect(() => {
    const persistedCart = localStorage.getItem('cart');
    if (persistedCart) {
      dispatch(removeAllItems());
      
      const parsedCart = JSON.parse(persistedCart);
      parsedCart.forEach((item: Product) => {
        dispatch(addItem(item));
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);
  

  return (
  <div className="text-white w-full md:max-w-[1440px]">
    <NavBar />
    <div className="pt-[186px] pb-[123px] max-w-[1000px] mx-auto px-[16px]">
      <Link href="/online-shop">
        <p className='text-gray-300 hover:text-gray-600'>
          ▶︎Back to online shop
        </p>
      </Link>
      <h1 className='text-3xl text-center'>My Cart</h1>

      <div className='flex flex-col-reverse md:flex-row mt-8 md:gap-x-6'>
        {/* Left */}
        <div className='flex-[2]'>
          {cartItems.length > 0 ? (
            <>
              <div className='flex gap-x-4 items-center'>
                <p className='text-xl'>Cart Items</p>
                <button className='text-sm hover:text-gray-300' onClick={handleRemoveAll}>Remove All Items</button>
              </div>
              <div className="mt-6">
                {cartItems.map((item) => (
                  <CartItem 
                    key={item.id} 
                    item={item} 
                    onRemove={handleRemove} 
                    onQuantityChange={handleQuantityChange}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className='text-xl'>
              <span>empty...</span>
            </div>
          )}
        </div>
        {/* Right */}
        <div className='flex-[1] mb-12 md:mb-0'>
          <p className='text-xl'>Total Price</p>
          <div className='bg-white mt-6 rounded-lg text-zinc-800 px-4 py-4 flex flex-col gap-y-4'>
            <div className='flex justify-between items-center'>
              <p className='text-zinc-500'>subtotal</p>
              <p className='text-xl'>$<span>{totalPrice.toFixed(2)}</span></p>
            </div>
            <div className='flex justify-between items-center'>
              <p className='text-zinc-500'>shipping cost</p>
              <p className='text-xl'>$<span>{cartItems.length > 0 ? 12.00 : 0.00}</span></p>
            </div>
            <button className='text-white bg-orange py-2 rounded-lg font-LDR' onClick={handlePurchase}>
              <span className='text-[12px]'>▶︎</span> Continue to payment
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}
export default page