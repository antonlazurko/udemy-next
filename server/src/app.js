const express = require('express');
const app = express();
const jsonMiddleware = require('./middlewares/jsonMiddleware');
const quotesRouter = require('./routes/quotesRouter');
const categoriesRouter = require('./routes/categoriesRouter');

app.use(jsonMiddleware);

app.use('/quotes', quotesRouter);
app.use('/categories', categoriesRouter);

module.exports = app;
