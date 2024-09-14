const products = require('../data/products.json');

exports.getAllProducts = () => {
  return products;
};

exports.getProductById = (id) => {
  return products.find(p => p.product_id === id);
};

exports.addProduct = (product) => {
  products.push(product);
  return product;
};

exports.updateProduct = (id, updatedData) => {
  const productIndex = products.findIndex(p => p.product_id === id);
  if (productIndex !== -1) {
    products[productIndex] = { ...products[productIndex], ...updatedData };
    return products[productIndex];
  }
  return null;
};

exports.deleteProduct = (id) => {
  const productIndex = products.findIndex(p => p.product_id === id);
  if (productIndex !== -1) {
    products.splice(productIndex, 1);
    return true;
  }
  return false;
};
