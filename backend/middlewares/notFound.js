const NotFoundError = require('../errors/NotFoundError');
const { ROUTE_NOT_FOUND_ERROR_MESSAGE } = require('../utils/constants');

module.exports = (req, res, next) => next(new NotFoundError(ROUTE_NOT_FOUND_ERROR_MESSAGE));
