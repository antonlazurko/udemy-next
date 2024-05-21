const express = require('express');
const app = express();
const jsonMiddleware = require('./middlewares/jsonMiddleware');
const quotesRouter = require('./routes/quotesRouter');
const categoriesRouter = require('./routes/categoriesRouter');
const errorHandler = require('./middlewares/errorHandler');

app.use(jsonMiddleware);

app.use('/quotes', quotesRouter);
app.use('/categories', categoriesRouter);

app.use(errorHandler);

module.exports = app;
