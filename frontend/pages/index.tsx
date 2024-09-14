import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Bars3Icon, BellIcon, XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import HeroSection from '../components/HeroSection';

interface Product {
  product_id: string;
  product_name: string;
  product_category: string;
  product_description: string;
  price: string;
  in_stock: number;
  discount_percentage?: number;
  image_url:string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  const shuffleArray = (array: Product[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        const productsWithDiscount = response.data.map((product: Product) => ({
          ...product,
          discount_percentage: 10, // Assign a discount value if needed
        }));
        const shuffledProducts = shuffleArray(productsWithDiscount);
        setProducts(shuffledProducts);
      } catch (err) {
        setError('Failed to fetch products');
        console.error(err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
    <HeroSection/>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Top Selling</h2>
      {error && <p className="text-red-500">{error}</p>}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product.product_id} product={product} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

