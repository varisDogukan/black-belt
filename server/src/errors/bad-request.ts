import { StatusCodes } from 'http-status-codes';

import CustomAPIError from './custom-api';

class BadRequestErrors extends CustomAPIError {
  statusCode: number;

  constructor(message: string) {
    super(message);

    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export default BadRequestErrors;
