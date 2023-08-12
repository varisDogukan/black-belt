import { Types, Document } from 'mongoose';

export interface IUser extends Document {
  _id: Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  createJWT(): string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}
