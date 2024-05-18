const express = require('express');
const { query, param } = require('express-validator');
const router = express.Router();
const quotesController = require('../controllers/quotesController');
const validationErrorHandler = require('../middlewares/validationErrorHandler');

const getAllQuotesValidators = [
  query('limit').optional().trim().isInt({ min: 1, max: 50 }),
  query('offset').optional().trim().isInt({ min: 0 }),
  query('author').optional().trim().escape(),
  query('text').optional().trim().escape(),
  query('category')
    .optional()
    .trim()
    .escape()
    .custom((value) =>
      /^[a-z\-]+$/.test(value) // Allows lowercase letters and dashes
        ? Promise.resolve()
        : Promise.reject('Category can only contain letters and dashes')
    ),
];

// Route to get all quotes
router.get(
  '/',
  getAllQuotesValidators,
  validationErrorHandler,
  quotesController.getAllQuotes
);

// Route to get a specific quote by ID
router.get(
  '/:id',
  [param('id').trim().isInt({ min: 1 })],
  validationErrorHandler,
  quotesController.getQuoteById
);

module.exports = router;
