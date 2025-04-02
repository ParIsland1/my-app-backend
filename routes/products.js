import express from "express";
import productRepo from "../repositories/productRepository.js";

const router = express.Router();

router.get("/", (req, res) => {
  const products = productRepo.getAllProducts();
  res.json(products);
});

router.get("/:id", (req, res) => {
  const product = productRepo.getProductById(parseInt(req.params.id));
  if (product) res.json(product);
  else res.status(404).send("Product not found");
});

export default router;
