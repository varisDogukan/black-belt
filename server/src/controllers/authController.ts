import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import User from '../model/User';
import { IUser } from '../interface/IUser';
import { BadRequestError, UnAuthenticatedError } from '../errors/index';

const register = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    throw new BadRequestError('please provide all values');
  }

  if (password !== confirmPassword) {
    throw new BadRequestError('password and confirm password are not equal.');
  }

  const userAlreadyExists: IUser | null = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError('Email already in use');
  }

  await User.create({
    firstName,
    lastName,
    email,
    password,
  });

  res.status(StatusCodes.CREATED).json({
    msg: 'Registration successful.',
  });
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError('Please provide all values');
  }

  const user: IUser = await User.findOne({ email }).select('+password');

  if (!user) {
    throw new UnAuthenticatedError('Email or Password is invalid.');
  }

  const isPasswordCorrect: boolean = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError('Email or Password is invalid.');
  }

  const token: string = user.createJWT();

  user.password = undefined!;

  res.status(StatusCodes.OK).json({ user, token, msg: 'Login is successful.' });
};

export { register, login };
