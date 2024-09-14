import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface CartItem {
  productId: string;
  quantity: number;
  product_id: string;
  product_name: string;
  product_description: string;
  product_category: string;
  price: number;
  in_stock: number;
  directions: string;
  image_url: string;
}

interface CartContextType {
  cart: CartItem[];
  totalItems: number;
  addToCart: (productId: string, quantity: number) => void;
  updateCart: (productId: string, quantity: number) => void;
  deleteFromCart: (productId: string) => void;
  fetchCart: () => void;
}

// Add ReactNode to the children prop to avoid the error
interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    fetchCart();
  }, []);

  // Fetch cart items from backend
  const fetchCart = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/cart');
      setCart(response.data);
      updateTotalItems(response.data);
    } catch (error) {
      console.error('Failed to fetch cart items:', error);
    }
  };

  // Add item to cart
  const addToCart = async (productId: string, quantity: number) => {
    try {
      await axios.post('http://localhost:5000/api/cart', { productId, quantity });
      fetchCart();
    } catch (error) {
      console.error('Failed to add item to cart:', error);
    }
  };

  // Update cart item quantity
  const updateCart = async (productId: string, quantity: number) => {
    try {
      await axios.put('http://localhost:5000/api/cart', { productId, quantity });
      fetchCart();
    } catch (error) {
      console.error('Failed to update cart:', error);
    }
  };

  // Delete item from cart
  const deleteFromCart = async (productId: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/cart/${productId}`);
      fetchCart();
    } catch (error) {
      console.error('Failed to delete item from cart:', error);
    }
  };

  // Update total items count
  const updateTotalItems = (cartItems: CartItem[]) => {
    const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setTotalItems(total);
  };

  return (
    <CartContext.Provider value={{ cart, totalItems, addToCart, updateCart, deleteFromCart, fetchCart }}>
      {children}
    </CartContext.Provider>
  );
};
