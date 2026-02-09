import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from '../models/productModel.js';

// Create new product
export const createProductController = (req, res) => {
  const { name, price, description, inStock, category } = req.body;

  if (!name || price == null) {
    return res.status(400).json({
      success: false,
      message: 'Name and price are required'
    });
  }

  const product = createProduct({
    name,
    price,
    description,
    inStock,
    category
  });

  return res.status(201).json({
    success: true,
    data: product
  });
};

// Get all products
export const getProductsController = (req, res) => {
  const products = getAllProducts();
  return res.json({
    success: true,
    data: products
  });
};

// Get single product by ID
export const getProductByIdController = (req, res) => {
  const { id } = req.params;
  const product = getProductById(id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found'
    });
  }

  return res.json({
    success: true,
    data: product
  });
};

// Update product
export const updateProductController = (req, res) => {
  const { id } = req.params;
  const updated = updateProduct(id, req.body);

  if (!updated) {
    return res.status(404).json({
      success: false,
      message: 'Product not found'
    });
  }

  return res.json({
    success: true,
    data: updated
  });
};

// Delete product
export const deleteProductController = (req, res) => {
  const { id } = req.params;
  const deleted = deleteProduct(id);

  if (!deleted) {
    return res.status(404).json({
      success: false,
      message: 'Product not found'
    });
  }

  return res.json({
    success: true,
    message: 'Product deleted successfully'
  });
};

export default {
  createProductController,
  getProductsController,
  getProductByIdController,
  updateProductController,
  deleteProductController
};


