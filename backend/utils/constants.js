const CREATE_CODE = 201;
const DEFAULT_ERROR_CODE = 500;

const VALIDATION_ERROR_NAME = 'ValidationError';
const ORDER_VALIDATION_ERROR_MESSAGE = 'Переданы некоректные данные для заказа';

const FILENAME_REQUEST_LOG = 'request.log';
const FILENAME_ERROR_LOG = 'error.log';

const ROUTE_NOT_FOUND_ERROR_MESSAGE = 'Такой страницы не существует';

const allowedCors = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://aperturestudio.ru',
];

const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

module.exports = {
  CREATE_CODE,
  DEFAULT_ERROR_CODE,
  VALIDATION_ERROR_NAME,
  FILENAME_REQUEST_LOG,
  FILENAME_ERROR_LOG,
  allowedCors,
  DEFAULT_ALLOWED_METHODS,
  ORDER_VALIDATION_ERROR_MESSAGE,
  ROUTE_NOT_FOUND_ERROR_MESSAGE,
};
