import express from 'express';
import {
  createProductController,
  getProductsController,
  getProductByIdController,
  updateProductController,
  deleteProductController
} from '../controllers/productController.js';

const router = express.Router();

// GET /api/products
router.get('/', getProductsController);

// GET /api/products/:id
router.get('/:id', getProductByIdController);

// POST /api/products
router.post('/', createProductController);

// PUT /api/products/:id
router.put('/:id', updateProductController);

// DELETE /api/products/:id
router.delete('/:id', deleteProductController);

export default router;


