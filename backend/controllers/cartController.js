const products = require('../data/products.json'); // Assuming products are stored in a JSON file or in-memory
let cart = []; // Cart array storing productId and quantity

// Helper function to find product details by ID
const getProductDetails = (productId) => {
  return products.find(product => product.product_id === productId);
};

// Updated getCart function to include product details
exports.getCart = (req, res) => {
  const cartWithDetails = cart.map(item => {
    const product = getProductDetails(item.productId);
    return {
      ...item,
      product_name: product ? product.product_name : 'Unknown Product',
      product_category: product ? product.product_category : 'Unknown Category',
      product_price: product ? product.price : 0,
      product_description: product ? product.product_description : 'No description available',
      in_stock: product ? product.in_stock : 0,
      image_url: product ? product.image_url : 'Unknown Image',
      price : product ? product.price : 0,
    };
  });

  res.status(200).json(cartWithDetails);
};

exports.addToCart = (req, res) => {
  const { productId, quantity } = req.body;
  const item = cart.find(i => i.productId === productId);

  if (item) {
    item.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }
  res.status(201).json(cart);
};

exports.updateCart = (req, res) => {
  const { productId, quantity } = req.body;
  const item = cart.find(i => i.productId === productId);
  
  if (item) {
    item.quantity = quantity;
    res.status(200).json(item);
  } else {
    res.status(404).json({ message: 'Item not found in cart' });
  }
};

exports.deleteFromCart = (req, res) => {
  cart = cart.filter(item => item.productId !== req.params.id);
  res.status(200).json({ message: 'Item removed from cart' });
};