import {INITIALIZED} from './init'
import {setItem, removeItem} from '../utils/storage'
import _ from 'lodash'

/**
 * Constants
 */

export const LOGIN_USER = 'auth/LOGIN_USER'
export const LOGIN_USER_BY_TOKEN = 'auth/LOGIN_USER_BY_TOKEN'
export const UNEXPECTED_ERROR = 'auth/UNEXPECTED_ERROR'
export const LOG_OUT = 'auth/LOG_OUT'

/**
 * Action Creators
 */

export function loginByToken(token) {
  return async dispatch => {
    try {
      await setItem('token', token)
      dispatch({type: LOGIN_USER_BY_TOKEN, token})
    } catch (err) {
      dispatch({type: UNEXPECTED_ERROR, error: err})
    }
  }
}

export function onLogOut() {
  return async dispatch => {
    try {
      await removeItem('token')
      dispatch({type: LOG_OUT})
    } catch (error) {
      console.warn("Can't sign out. Error: ", error)
    }
  }
}

/**
 * Reducer
 */

const initialState = {
  loginedIn: false,
  token: '',
  error: false,
  errors: {}
}

export default function auth(state = initialState, action) {
  switch (action.type) {
  case INITIALIZED: {
    if (!!action.token) {
      return {...state,
        loginedIn: true,
        token: action.token
      }
    } else {
      return {...state,
        error: true,
        errors: action.error
      }
    }
  }
  case LOGIN_USER_BY_TOKEN: {
    return {...state,
      loginedIn: true,
      token: action.token
    }
  }

  case LOG_OUT: {
    return _.merge({}, state, initialState)
  }
  default:
    return state
  }
}
