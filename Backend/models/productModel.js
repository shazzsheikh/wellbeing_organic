// Simple in-memory Product model (replace with real DB later)
// This is just for structure and development; not production-ready.

let products = [];
let currentId = 1;

export const createProduct = (data) => {
  const product = {
    id: currentId++,
    name: data.name,
    description: data.description || '',
    price: data.price ?? 0,
    inStock: data.inStock ?? true,
    category: data.category || 'general',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  products.push(product);
  return product;
};

export const getAllProducts = () => products;

export const getProductById = (id) =>
  products.find((p) => p.id === Number(id)) || null;

export const updateProduct = (id, data) => {
  const index = products.findIndex((p) => p.id === Number(id));
  if (index === -1) return null;

  products[index] = {
    ...products[index],
    ...data,
    updatedAt: new Date().toISOString()
  };

  return products[index];
};

export const deleteProduct = (id) => {
  const index = products.findIndex((p) => p.id === Number(id));
  if (index === -1) return false;
  products.splice(index, 1);
  return true;
};

export const resetProducts = () => {
  // Useful for tests / resetting state
  products = [];
  currentId = 1;
};

export default {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  resetProducts
};


