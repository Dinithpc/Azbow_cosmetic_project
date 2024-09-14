import React, { useEffect, useState, FC } from 'react';
import MobileCart from './MobileCart';
import DesktopCart from './DesktopCart';
import { useCart } from '../context/CartContext'; // Assuming you're using a CartContext



const CartCard = () => {
  const [subtotal, setSubtotal] = useState(0);
  
  const { cart, updateCart, deleteFromCart } = useCart(); // Assuming useCart provides cart operations

  // Function to calculate subtotal
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  // Function to update quantity
  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) return;
    updateCart(productId, newQuantity); // Assuming updateCart handles updating quantity
  };

  // Function to remove item from cart
  const removeItem = (productId: string) => {
    deleteFromCart(productId); // Assuming deleteFromCart removes the item from the cart
  };

  useEffect(() => {
    setSubtotal(calculateSubtotal());
  }, [cart]);

  return (
    <section className="container mx-auto flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10">
      <MobileCart
        product={cart}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
      />
      <DesktopCart
        product={cart}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
      />
      
      {/* Order summary */}
      <section className="mx-auto w-full px-4 md:max-w-[400px]">
        <div className="">
          <div className="border py-5 px-4 shadow-md">
            <p className="font-bold">ORDER SUMMARY</p>
            <div className="flex justify-between border-b py-5">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between border-b py-5">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between py-5">
              <p>Total</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <a href="checkout-address.html">
              <button className="w-full bg-violet-900 px-5 py-2 text-white rounded-md">
                Proceed to checkout
              </button>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CartCard;
