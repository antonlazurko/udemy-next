const sequelize = require('.');

const QuoteCategory = sequelize.define('QuoteCategory', {
  // No need for any additional attributes in this table
});

module.exports = QuoteCategory;
