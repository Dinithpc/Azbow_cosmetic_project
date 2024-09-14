import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const MobileCart = ({ product, updateQuantity, removeItem }) => {
  return (
    <section className="container mx-auto my-3 flex w-full flex-col gap-3 px-4 md:hidden">
      {product.map((x) => {
        return (
          <div key={x.productId} className="flex w-full border px-4 py-4">
            <img
              className="self-start object-contain"
              width="90px"
              src={x.image_url}
              alt={x.product_name}
            />
            <div className="ml-3 flex w-full flex-col justify-center">
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold">{x.product_name}</p>
              </div>
              <p className="py-3 text-xl font-bold text-violet-900">
                ${x.price}
              </p>
              <div className="mt-2 flex w-full items-center justify-between">
                <div className="flex items-center justify-center">
                  <button
                    className="flex h-8 w-8 cursor-pointer items-center justify-center border"
                    onClick={() => updateQuantity(x.productId, x.quantity - 1)}
                  >
                    −
                  </button>
                  <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b">
                    {x.quantity}
                  </div>
                  <button
                    className="flex h-8 w-8 cursor-pointer items-center justify-center border"
                    onClick={() => updateQuantity(x.productId, x.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <FaTrashAlt
                  onClick={() => removeItem(x.productId)}
                  className="m-0 h-5 w-5 cursor-pointer"
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default MobileCart;
