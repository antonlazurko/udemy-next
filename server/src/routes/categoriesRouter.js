const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');

// Route to get all categories
router.get('/', categoriesController.getAllCategories);

// Route to get a specific category by ID
router.get('/:id', categoriesController.getCategoryById);

module.exports = router;
