import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const DesktopCart = ({ product, updateQuantity, removeItem }) => {
  return (
    <section className="hidden w-full max-w-[1200px] px-5 pb-10 md:grid">
      <div className="overflow-y-auto h-[500px] rounded-xl">
        <table className="min-w-full table-fixed">
          <thead className="h-16 bg-neutral-100">
            <tr>
              <th className="p-4 text-left">Item</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Quantity</th>
              <th className="p-4 text-left">Total</th>
              <th className="p-4 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {product.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-500">No items in cart</td>
              </tr>
            ) : (
              product.map((x) => (
                <tr className="h-[100px] border-b" key={x.productId}>
                  <td className="p-2">
                    <div className="flex items-center">
                      <img
                        className="w-[90px] h-[90px] object-cover"
                        src={x.image_url}
                        alt={x.product_name}
                      />
                      <div className="ml-3 flex flex-col justify-center">
                        <p className="text-lg font-semibold">{x.product_name}</p>
                        <p className="text-sm text-gray-500">
                          Category: {x.product_category}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 text-center">${x.price}</td>
                  <td className="p-2 text-center">
                    <div className="flex items-center justify-center">
                      <button
                        className="flex h-8 w-8 cursor-pointer items-center justify-center border border-gray-300 rounded"
                        onClick={() => updateQuantity(x.productId, x.quantity - 1)}
                      >
                        −
                      </button>
                      <div className="flex h-8 w-8 items-center justify-center border-t border-b border-gray-300">
                        {x.quantity}
                      </div>
                      <button
                        className="flex h-8 w-8 cursor-pointer items-center justify-center border border-gray-300 rounded"
                        onClick={() => updateQuantity(x.productId, x.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-2 text-center">
                    ${(x.price * x.quantity).toFixed(2)}
                  </td>
                  <td className="p-2 text-center">
                    <FaTrashAlt
                      onClick={() => removeItem(x.productId)}
                      className="h-5 w-5 cursor-pointer text-red-500"
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DesktopCart;
