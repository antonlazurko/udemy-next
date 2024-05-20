const { query, param, body } = require('express-validator');

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

const postQuoteValidators = [
  body('text')
    .trim()
    .isString()
    .isLength({ min: 10 })
    .withMessage('Text is required'),
  body('author')
    .trim()
    .isString()
    .isLength({ min: 2, max: 255 })
    .withMessage('Author must be a string from 2 to 255 characters'),
  body('categories')
    .isArray({ min: 1 })
    .withMessage('Categories must be an array with at least one category'),
  body('categories.*')
    .trim()
    .matches(/^[a-z\-]+$/)
    .withMessage('Each category must be lowercase letters and dashes only'),
];

const getRandomQuotesValidators = [
  query('limit').optional().trim().isInt({ min: 1, max: 20 }),
];

const getSingleQuoteValidators = [param('id').trim().isInt({ min: 1 })];

module.exports = {
  getAllQuotesValidators,
  getRandomQuotesValidators,
  getSingleQuoteValidators,
  postQuoteValidators,
};
