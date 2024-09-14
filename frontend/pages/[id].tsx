import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ProductDetailsCard } from '../components/ProductDetailsCard';

interface Product {
  product_id: string;
  product_name: string;
  product_description: string;
  product_category: string;
  price: string;
  in_stock: number;
  directions: string;
  image_url: string;
}

export default function ProductDetails() {
  const [product, setProduct] = useState<Product | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/products/${id}`).then((response) => setProduct(response.data));
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Product Details</h2>
        <ProductDetailsCard product={product}/>
      </div>
      </div>
    </div>
  );
}
