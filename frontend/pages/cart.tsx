import axios from 'axios';
import { useEffect, useState } from 'react';
import CartCard from '../components/cartCard';
import Custom404 from '../components/NotResourceFound';

export default function Cart() {

  return (
    <div>
      <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Shopping Cart</h2>
        <CartCard />
      </div>
      </div>
    </div>
  );
}
