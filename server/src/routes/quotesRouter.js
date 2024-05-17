const express = require('express');
const router = express.Router();
const quotesController = require('../controllers/quotesController');

// Route to get all quotes
router.get('/', quotesController.getAllQuotes);

// Route to get a specific quote by ID
router.get('/:id', quotesController.getQuoteById);

module.exports = router;
