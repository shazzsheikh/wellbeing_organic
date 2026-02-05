import express from 'express';

const router = express.Router();

// Health check route
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is healthy',
    timestamp: new Date().toISOString()
  });
});

// Add your routes here
// router.get('/example', exampleController.getExample);
// router.post('/example', exampleController.createExample);

export default router;

 