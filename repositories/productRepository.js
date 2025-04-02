import fs from "fs";
import path from "path";

const filePath = path.resolve("./data/products.json");

const getAllProducts = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

const getProductById = (id) => {
  const data = getAllProducts();
  return data.find(p => p.id === id);
};

export default { getAllProducts, getProductById };
