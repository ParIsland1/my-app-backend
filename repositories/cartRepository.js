import fs from "fs";
import path from "path";

const filePath = path.resolve("./data/cart.json");

const getCart = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

const addToCart = (item) => {
  const cart = getCart();
  cart.push(item);
  fs.writeFileSync(filePath, JSON.stringify(cart, null, 2));
};

const removeFromCart = (id) => {
  let cart = getCart();
  cart = cart.filter(item => item.id !== id);
  fs.writeFileSync(filePath, JSON.stringify(cart, null, 2));
};

export default { getCart, addToCart, removeFromCart };
