import express from "express";
import cors from "cors";
import productRoutes from "./routes/products.js";
import cartRoutes from "./routes/cart.js";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`));
