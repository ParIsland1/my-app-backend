Backend Setup (my-app-backend)

Setup
1. Clone this repository
2. Run npm install
3. Run npm start

API Endpoints
Products
- GET /products - Get all products
- GET /products/:id - Get a product by ID

Cart
- GET /cart - Get all cart items
- POST /cart/add - Add an item to cart { id, name, type, size }
- POST /cart/remove - Remove an item from cart { id }

Notes
- Uses Repository Pattern
- Data stored in data/products.json and data/cart.json
- Tested and runs locally on http://localhost:3001/
