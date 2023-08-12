import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

interface MyError extends Error {
  statusCode?: number;
  errors?: { message: string }[];
  code?: number;
  keyValue?: { [key: string]: any };
}

const errorHandlerMiddleware = (
  err: MyError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const defaultError: MyError = {
    name: err.name || 'Error',
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || 'Something went wrong, try again later',
  };

  if (err.name === 'ValidationError' && err.errors) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.message = err.errors.map((item) => item.message).join(',');
  }

  // 11000 = unique
  if (err.code && err.code === 11000 && err.keyValue) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.message = `${Object.keys(
      err.keyValue,
    )} field has to be unique`;
  }

  res
    .status(defaultError.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: defaultError.message });
};

export default errorHandlerMiddleware;
