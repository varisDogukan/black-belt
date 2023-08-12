import { StatusCodes } from 'http-status-codes';

import CustomAPIError from './custom-api';

class NotFoundErrors extends CustomAPIError {
  statusCode: number;

  constructor(message: string) {
    super(message);

    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

export default NotFoundErrors;
