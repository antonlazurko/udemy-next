const express = require('express');
const app = express();
const jsonMiddleware = require('./middlewares/jsonMiddleware');
const quotesRouter = require('./routes/quotesRouter');
const categoriesRouter = require('./routes/categoriesRouter');
const errorMiddleware = require('./middlewares/errorMiddleware');

app.use(jsonMiddleware);

app.use('/quotes', quotesRouter);
app.use('/categories', categoriesRouter);

app.use(errorMiddleware);

module.exports = app;
