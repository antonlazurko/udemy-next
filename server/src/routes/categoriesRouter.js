const express = require('express');
const { query, param } = require('express-validator');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');
const validationErrorHandler = require('../middlewares/validationErrorHandler');

const getAllCategoriesValidators = [
  query('limit').optional().trim().isInt({ min: 1, max: 50 }),
  query('offset').optional().trim().isInt({ min: 0 }),
  query('name')
    .optional()
    .trim()
    .escape()
    .custom((value) =>
      /^[a-z\-]+$/i.test(value) // Allows any letters and dashes
        ? Promise.resolve()
        : Promise.reject('Category can only contain letters and dashes')
    ),
];

// Route to get all categories
router.get(
  '/',
  getAllCategoriesValidators,
  validationErrorHandler,
  categoriesController.getAllCategories
);

// Route to get a specific category by ID
router.get(
  '/:id',
  [param('id').trim().isInt({ min: 1 })],
  validationErrorHandler,
  categoriesController.getCategoryById
);

module.exports = router;
