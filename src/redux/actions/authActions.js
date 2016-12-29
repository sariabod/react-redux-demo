import axios from 'axios';
import * as types from './actionTypes';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../../constants';
import { CALL_API } from '../../middlewares/api';

export function currentUserRequest(payload) {
  return { type: types.CURRENT_USER_REQUEST, payload };
}

export function currentUserSuccess(payload) {
  return { type: types.CURRENT_USER_SUCCESS, payload };
}

export function currentUserFailure(payload) {
  return { type: types.CURRENT_USER_FAILURE, payload };
}

export function authenticateUser(credentials) {
  return {
    [CALL_API]: {
      method: 'post',
      data: credentials,
      endpoint: 'auth/login',
      types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE]
    }
  };
}
