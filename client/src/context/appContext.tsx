/* eslint-disable no-useless-return */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/function-component-definition */
import React, { useReducer, useContext, createContext, ReactNode } from 'react';
import reducer from './reducer';
import {
  State,
  AppContextType,
  HandleChange,
  SignUser,
  IUser,
} from './context.types';
import ActionTypes from './action';
import authFetch from './authFetch';

const addUserToLocalStorage = ({
  user,
  token,
}: {
  user: IUser;
  token: string;
}) => {
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', token);
};

const removeUserFromLocalStorage = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

const token: string | null = localStorage.getItem('token');

const userString = localStorage.getItem('user');
const user: IUser | null = userString ? JSON.parse(userString) : null;

const initialState: State = {
  user,
  token,
  userLoading: false,

  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  lEmail: '',
  lPassword: '',

  showAlert: false,
  alertText: '',
  alertType: '',

  pirates: [],
  singlePirate: null,
  name: '',
  image: '',
  crewPosition: 'First Mate',
  chests: 0,
  phrase: '',
  pegLeg: false,
  eyePatch: false,
  hookHand: false,
  pirateLoading: false,
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider: React.FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = ({ name, value }: HandleChange) => {
    dispatch({ type: ActionTypes.HANDLE_CHANGE, payload: { name, value } });
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: ActionTypes.CLEAR_ALERT });
    }, 3000);
  };

  const clearPirateValue = () => {
    dispatch({ type: ActionTypes.CLEAR_PIRATE_VALUE });
  };

  /**
   * @description User Register and Login
   * @param currentUser object
   * @param endPoint string
   */
  const setupUser = async ({ currentUser, endPoint }: SignUser) => {
    dispatch({ type: ActionTypes.SETUP_USER_BEGIN });

    try {
      const { data } = await authFetch.post(`auth/${endPoint}`, currentUser);

      dispatch({
        type: ActionTypes.SETUP_USER_SUCCESS,
        payload: data,
      });

      if (endPoint === 'login') {
        addUserToLocalStorage({ user: data.user, token: data.token });
      }

      clearAlert();
    } catch (error: any) {
      dispatch({
        type: ActionTypes.SETUP_USER_ERROR,
        payload: error.response.data.msg,
      });

      clearAlert();
    }
  };

  const logoutUser = () => {
    dispatch({ type: ActionTypes.LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  const createPirate = async () => {
    dispatch({ type: ActionTypes.CREATE_PIRATE_BEGIN });

    try {
      const {
        name,
        image,
        crewPosition,
        chests,
        phrase,
        pegLeg,
        eyePatch,
        hookHand,
      } = state;

      await authFetch.post('pirates', {
        name,
        image,
        crewPosition,
        chests,
        phrase,
        pegLeg,
        eyePatch,
        hookHand,
      });

      dispatch({ type: ActionTypes.CREATE_PIRATE_SUCCESS });
      clearPirateValue();
      clearAlert();
    } catch (error: any) {
      if (error.response.status === 401) return;

      dispatch({
        type: ActionTypes.CREATE_PIRATE_ERROR,
        payload: error.response.data.msg,
      });
      clearAlert();
    }
  };

  const getAllPirates = async () => {
    dispatch({ type: ActionTypes.GET_ALL_PIRATES_BEGIN });

    try {
      const { data } = await authFetch('pirates');

      dispatch({ type: ActionTypes.GET_ALL_PIRATES_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_ALL_PIRATES_ERROR,
      });
    }
  };

  const deletePirate = async (id: string) => {
    dispatch({ type: ActionTypes.DELETE_PIRATE_BEGIN });

    try {
      const { data } = await authFetch.delete(`/pirates/${id}`);

      dispatch({ type: ActionTypes.DELETE_PIRATE_SUCCESS, payload: data.msg });

      getAllPirates();
      clearAlert();
    } catch (error: any) {
      if (error.response.status === 401) return;

      dispatch({
        type: ActionTypes.DELETE_PIRATE_ERROR,
        payload: error.response.data.msg,
      });

      clearAlert();
    }
  };

  const getSinglePirate = async (id: string) => {
    dispatch({ type: ActionTypes.GET_SINGLE_PIRATE_BEGIN });

    try {
      const { data } = await authFetch.get(`/pirates/${id}`);

      dispatch({
        type: ActionTypes.GET_SINGLE_PIRATE_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.GET_SINGLE_PIRATE_ERROR,
        payload: error.response.data.msg,
      });

      clearAlert();
    }
  };

  const updatePirate = async (
    id?: string,
    statusName?: string,
    statusValue?: boolean
  ) => {
    dispatch({ type: ActionTypes.UPDATE_PIRATE_BEGIN });

    try {
      const { data } = await authFetch.put(`/pirates/${id}`, {
        [statusName!]: statusValue,
      });

      dispatch({
        type: ActionTypes.UPDATE_PIRATE_SUCCESS,
        payload: data.msg,
      });

      getSinglePirate(id!);
      clearAlert();
    } catch (error: any) {
      if (error.response.status === 401) return;

      dispatch({
        type: ActionTypes.UPDATE_PIRATE_ERROR,
        payload: error.response.data.msg,
      });

      clearAlert();
    }
  };

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        handleChange,
        setupUser,
        clearAlert,
        logoutUser,
        createPirate,
        clearPirateValue,
        getAllPirates,
        deletePirate,
        getSinglePirate,
        updatePirate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }

  return context;
};

export { AppProvider, useAppContext, initialState };
