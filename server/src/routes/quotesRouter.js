const express = require('express');
const router = express.Router();
const quotesController = require('../controllers/quotesController');
const validationErrorHandler = require('../middlewares/validationErrorHandler');
const {
  getAllQuotesValidators,
  postQuoteValidators,
  getRandomQuotesValidators,
  getSingleQuoteValidators,
} = require('../middlewares/quoteValidators');

// Route to get all quotes
router.get(
  '/',
  getAllQuotesValidators,
  validationErrorHandler,
  quotesController.getAllQuotes
);

// Route to create a new quote
router.post(
  '/',
  postQuoteValidators,
  validationErrorHandler,
  quotesController.postQuote
);

// Route to get several random quotes
router.get(
  '/random',
  getRandomQuotesValidators,
  validationErrorHandler,
  quotesController.getRandomQuotes
);

// Route to get a specific quote by ID
router.get(
  '/:id',
  getSingleQuoteValidators,
  validationErrorHandler,
  quotesController.getQuoteById
);

module.exports = router;
