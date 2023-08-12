/* eslint-disable import/no-cycle */
import { Dispatch } from 'react';
import { Action } from './action-reduce.types';

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface IPirate {
  _id: string;
  name: string;
  image: string;
  crewPosition: string;
  chests: number;
  phrase: string;
  pegLeg: boolean;
  eyePatch: boolean;
  hookHand: boolean;
}

export type State = {
  user: IUser | null;
  pirates: IPirate[];
  singlePirate: IPirate | null;
  token: string | null;
  userLoading: boolean;

  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  lEmail: string;
  lPassword: string;

  showAlert: boolean;
  alertText: string;
  alertType: string;

  name: string;
  image: string;
  crewPosition: string;
  chests: number;
  phrase: string;
  pegLeg: boolean;
  eyePatch: boolean;
  hookHand: boolean;
  pirateLoading: boolean;
};

type CurrentUserType = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export type SignUser = {
  currentUser: CurrentUserType;
  endPoint: string;
};

export type HandleChange = {
  name: string;
  value: string | number | boolean;
};

export interface AppContextType {
  state: State;
  dispatch: Dispatch<Action>;
  handleChange: ({ name, value }: HandleChange) => void;

  setupUser: ({ currentUser, endPoint }: SignUser) => void;
  logoutUser: () => void;

  clearAlert: () => void;
  clearPirateValue: () => void;

  createPirate: () => void;
  getAllPirates: () => void;
  deletePirate: (id: string) => void;
  getSinglePirate: (id: string) => void;
  updatePirate: (
    id?: string,
    statusName?: string,
    statusValue?: boolean
  ) => void;
}
