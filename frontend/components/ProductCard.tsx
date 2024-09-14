import { useRouter } from 'next/router'; // Use useRouter for navigation in Next.js
import { useCart } from "../context/CartContext";

interface Product {
  product_id: string;
  product_name: string;
  product_category: string;
  product_description: string;
  price: string;
  in_stock: number; // Field to indicate stock count
  discount_percentage?: number;
  image_url: string; // Optional field for discount percentage
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the card click from triggering
    if (product.in_stock > 0) {
      addToCart(product.product_id, 1); // Add 1 item to the cart
    }
  };

  const navigateToProductDetails = () => {
    router.push(`/${product.product_id}`);
  };

  return (
    <div 
      className={`group relative ${product.in_stock <= 0 ? 'cursor-not-allowed opacity-70' : ''}`} 
      aria-disabled={product.in_stock <= 0}
      onClick={navigateToProductDetails} // Navigate to product details page on card click
    >
      {/* Product image */}
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 relative">
        <img
          alt={`Front of ${product.product_name}.`}
          src={product.image_url}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />

        {/* Discount badge */}
        {product.discount_percentage && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold py-1 px-2 rounded-md">
            {product.discount_percentage}% OFF
          </div>
        )}
      </div>

      {/* Product details */}
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            {product.product_name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">Black</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
      </div>

      {/* Stock Status */}
      <div className="mt-2 text-sm font-bold">
        {product.in_stock > 0 ? (
          <p className="text-green-600 border border-green-600 rounded px-2 inline-block">
            In Stock
          </p>
        ) : (
          <p className="text-gray-600 border border-gray-600 rounded px-2 inline-block">
            Out of Stock
          </p>
        )}
      </div>

      {/* Add to Cart button */}
      <div className="mt-4">
        <button
          type="button"
          className={`w-full rounded-md py-2 px-4 text-sm font-medium text-white ${
            product.in_stock > 0 ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-500 cursor-not-allowed'
          }`}
          onClick={handleAddToCart} // Only runs add to cart function
          disabled={product.in_stock === 0}
        >
          {product.in_stock > 0 ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
}
