import type { ErrorRequestHandler } from 'express';
import ApiError from '@controllers/errorController';

// Eslint don't accept Next because is never used but a error handler need to have 4 params
/* eslint-disable */
const apiErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  // If the error is a common error (like wrong credential) just show the error to the user
  if (error instanceof ApiError && error.code !== 500) {
    return res.status(error.code).json(error.message);
  }
  // If the error is a internal error or a unknown error
  // just render a generic error message to the user and show the error on console
  console.log(error)
  return res.status(500).json('Ocorreu algum problema do nosso lado');
};

export default apiErrorHandler;