/* eslint-disable import/no-cycle */
import { State } from './context.types';
import { Action } from './action-reduce.types';
import ActionTypes from './action';
import { initialState } from './appContext';

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.HANDLE_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case ActionTypes.SETUP_USER_BEGIN:
      return {
        ...state,
        userLoading: true,
      };

    case ActionTypes.SETUP_USER_SUCCESS:
      return {
        ...state,
        userLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: action.payload.msg,
        user: action.payload.user || null,
        token: action.payload.token || null,
      };

    case ActionTypes.SETUP_USER_ERROR:
      return {
        ...state,
        userLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload,
      };

    case ActionTypes.LOGOUT_USER:
      return {
        ...initialState,
        user: null,
        token: null,
      };

    case ActionTypes.CLEAR_ALERT:
      return { ...state, showAlert: false, alertType: '', alertText: '' };

    case ActionTypes.CREATE_PIRATE_BEGIN:
      return {
        ...state,
        pirateLoading: true,
      };

    case ActionTypes.CREATE_PIRATE_SUCCESS:
      return {
        ...state,
        pirateLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: 'New Pirate Created!',
      };

    case ActionTypes.CREATE_PIRATE_ERROR:
      return {
        ...state,
        pirateLoading: false,
        showAlert: true,
        alertType: 'error',
        alertText: action.payload,
      };

    case ActionTypes.CLEAR_PIRATE_VALUE:
      return {
        ...state,
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

    case ActionTypes.GET_ALL_PIRATES_BEGIN:
      return {
        ...state,
        pirateLoading: true,
      };

    case ActionTypes.GET_ALL_PIRATES_SUCCESS:
      return {
        ...state,
        pirates: action.payload.pirates,
        pirateLoading: false,
      };

    case ActionTypes.DELETE_PIRATE_BEGIN:
      return {
        ...state,
        pirateLoading: true,
      };

    case ActionTypes.DELETE_PIRATE_SUCCESS:
      return {
        ...state,
        pirateLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: action.payload,
      };

    case ActionTypes.DELETE_PIRATE_ERROR:
      return {
        ...state,
        pirateLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload,
      };

    case ActionTypes.GET_SINGLE_PIRATE_BEGIN:
      return {
        ...state,
        pirateLoading: true,
      };

    case ActionTypes.GET_SINGLE_PIRATE_SUCCESS:
      return {
        ...state,
        pirateLoading: false,
        singlePirate: action.payload.singlePirate,
      };

    case ActionTypes.GET_SINGLE_PIRATE_ERROR:
      return {
        ...state,
        pirateLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload,
      };

    case ActionTypes.UPDATE_PIRATE_BEGIN:
      return {
        ...state,
        pirateLoading: true,
      };

    case ActionTypes.UPDATE_PIRATE_SUCCESS:
      return {
        ...state,
        pirateLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: action.payload,
      };

    case ActionTypes.UPDATE_PIRATE_ERROR:
      return {
        ...state,
        pirateLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
