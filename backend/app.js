const express = require('express');
const cors = require('cors'); // Import the cors package
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
const PORT = 5000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

