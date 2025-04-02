import express from "express";
import cartRepo from "../repositories/cartRepository.js";

const router = express.Router();

router.get("/", (req, res) => {
  const cart = cartRepo.getCart();
  res.json(cart);
});

router.post("/add", (req, res) => {
  const item = req.body;
  cartRepo.addToCart(item);
  res.json({ message: "Item added to cart" });
});

router.post("/remove", (req, res) => {
  const { id } = req.body;
  cartRepo.removeFromCart(id);
  res.json({ message: "Item removed from cart" });
});

export default router;
