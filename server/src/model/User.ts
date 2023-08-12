import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { IUser } from '../interface/IUser';

const UserSchema: Schema<IUser> = new mongoose.Schema<IUser>({
  firstName: {
    type: String,
    required: [true, 'Please provide name'],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Please provide name'],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
    select: false,
  },
});

/**
 * Hash the password before saving.
 */
UserSchema.pre<IUser>('save', async function () {
  if (this.password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
  }
});

/**
 * Generate token
 * @returns token
 */
UserSchema.methods.createJWT = function (this: IUser) {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

/**
 * Check if the entered password is the same as the password in the database.
 * @param {*} candidatePassword
 * @returns boolean
 */
UserSchema.methods.comparePassword = function (
  this: IUser,
  candidatePassword: string,
): Promise<boolean> {
  let password = this.password!;

  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, password, (err, success) => {
      if (err) return reject(err);

      return resolve(success);
    });
  });
};

const UserModel = mongoose.model<IUser>('User', UserSchema);

export default UserModel;
