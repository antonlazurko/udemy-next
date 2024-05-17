const express = require('express');
const app = express();
const quotesRouter = require('./routes/quotesRouter');
const categoriesRouter = require('./routes/categoriesRouter');

app.use('/quotes', quotesRouter);
app.use('/categories', categoriesRouter);

module.exports = app;
