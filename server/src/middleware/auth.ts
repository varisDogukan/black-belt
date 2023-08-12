import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { UnAuthenticatedError } from '../errors/index';

declare global {
  namespace Express {
    interface Request {
      user: {
        userId: string;
      };
    }
  }
}

interface MyToken extends JwtPayload {
  userId: string;
  email?: string;
}

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnAuthenticatedError('Authentication Invalid');
  }

  const token = authHeader.split(' ')[1];

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET!) as MyToken;

    req.user = { userId: decodedToken.userId };

    next();
  } catch (error) {
    throw new UnAuthenticatedError('Authentication Invalid');
  }
};

export default auth;
