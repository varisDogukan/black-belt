/* eslint-disable import/no-cycle */
import ActionTypes from './action';
import { HandleChange, IPirate, IUser } from './context.types';

export type HandleChangeAction = {
  type: ActionTypes.HANDLE_CHANGE;
  payload: HandleChange;
};

type SetupUserPayloadType = {
  msg: string;
  token?: string;
  user?: IUser;
};

type SetupUserAction =
  | {
      type: ActionTypes.SETUP_USER_BEGIN;
    }
  | {
      type: ActionTypes.SETUP_USER_SUCCESS;
      payload: SetupUserPayloadType;
    }
  | {
      type: ActionTypes.SETUP_USER_ERROR;
      payload: string;
    };

type LogoutAction = { type: ActionTypes.LOGOUT_USER };
type AlertAction = { type: ActionTypes.CLEAR_ALERT };
type ClearPirateValueAction = { type: ActionTypes.CLEAR_PIRATE_VALUE };

type CreatePirateAction =
  | {
      type: ActionTypes.CREATE_PIRATE_BEGIN;
    }
  | {
      type: ActionTypes.CREATE_PIRATE_SUCCESS;
    }
  | {
      type: ActionTypes.CREATE_PIRATE_ERROR;
      payload: string;
    };

type GetAllPiratesPayloadType = {
  pirates: IPirate[];
};

type GetAllPiratesAction =
  | {
      type: ActionTypes.GET_ALL_PIRATES_BEGIN;
    }
  | {
      type: ActionTypes.GET_ALL_PIRATES_SUCCESS;
      payload: GetAllPiratesPayloadType;
    }
  | {
      type: ActionTypes.GET_ALL_PIRATES_ERROR;
    };

type DeletePirateAction =
  | {
      type: ActionTypes.DELETE_PIRATE_BEGIN;
    }
  | {
      type: ActionTypes.DELETE_PIRATE_SUCCESS;
      payload: string;
    }
  | {
      type: ActionTypes.DELETE_PIRATE_ERROR;
      payload: string;
    };

type GetSinglePiratePayloadType = {
  singlePirate: IPirate;
};

type GetSinglePirateAction =
  | {
      type: ActionTypes.GET_SINGLE_PIRATE_BEGIN;
    }
  | {
      type: ActionTypes.GET_SINGLE_PIRATE_SUCCESS;
      payload: GetSinglePiratePayloadType;
    }
  | {
      type: ActionTypes.GET_SINGLE_PIRATE_ERROR;
      payload: string;
    };

type UpdatePirateAction =
  | {
      type: ActionTypes.UPDATE_PIRATE_BEGIN;
    }
  | {
      type: ActionTypes.UPDATE_PIRATE_SUCCESS;
      payload: string;
    }
  | {
      type: ActionTypes.UPDATE_PIRATE_ERROR;
      payload: string;
    };

type ActionType =
  | HandleChangeAction
  | SetupUserAction
  | AlertAction
  | LogoutAction
  | CreatePirateAction
  | ClearPirateValueAction
  | GetAllPiratesAction
  | DeletePirateAction
  | GetSinglePirateAction
  | UpdatePirateAction;

export type Action = ActionType;
