const products = require('../data/products.json'); 

let cart = [];


const getProductDetails = (productId) => {
    return products.find(product => product.product_id === productId);
  };

exports.getCartWithDetails = () => {
  return cart.map(item => {
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
};

exports.addToCart = (productId, quantity) => {
  const item = cart.find(i => i.productId === productId);

  if (item) {
    item.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }
  return cart;
};

exports.updateCart = (productId, quantity) => {
  const item = cart.find(i => i.productId === productId);
  
  if (item) {
    item.quantity = quantity;
    return item;
  }
  return null; 
};

exports.deleteFromCart = (productId) => {
  const originalCartLength = cart.length;
  cart = cart.filter(item => item.productId !== productId);
  
  return cart.length !== originalCartLength; // Return true if an item was removed
};
