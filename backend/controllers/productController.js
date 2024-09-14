const productService = require('../service/ProductService');

exports.getProducts = (req, res) => {
  try {
    const products = productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products', error: error.message });
  }
};

exports.getProductById = (req, res) => {
  try {
    const product = productService.getProductById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving product', error: error.message });
  }
};

exports.addProduct = (req, res) => {
  try {
    const newProduct = req.body;

    // Validation: Check if all required fields are present
    if (!newProduct.product_id || !newProduct.name || !newProduct.price || !newProduct.category) {
      return res.status(400).json({ message: 'Missing required product information' });
    }

    const addedProduct = productService.addProduct(newProduct);
    res.status(201).json(addedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error adding product', error: error.message });
  }
};

exports.updateProduct = (req, res) => {
  try {
    const updatedProduct = productService.updateProduct(req.params.id, req.body);
    if (updatedProduct) {
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error: error.message });
  }
};

exports.deleteProduct = (req, res) => {
  try {
    const isDeleted = productService.deleteProduct(req.params.id);
    if (isDeleted) {
      res.status(200).json({ message: 'Product deleted successfully' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error: error.message });
  }
};
