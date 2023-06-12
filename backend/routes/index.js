const rootRouter = require('express').Router();

const shortsRouter = require('./order');

rootRouter.use('/order', shortsRouter);

module.exports = rootRouter;
