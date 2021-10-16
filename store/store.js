import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { actionTypes } from './actions'
import cookie from 'js-cookie'
import {TOKEN_COOKIE, USER_COOKIE} from '@/config/constants'

let store

const initialState = {
  count: 0,
  isLoggedIn: cookie.get(TOKEN_COOKIE) === undefined ? false : true,
  user: cookie.get(USER_COOKIE) !== undefined ? JSON.parse(cookie.get(USER_COOKIE)) : null,
  isOpenWallet: false,
  isBalanceChange: false,
  balanceANT: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN: 
      cookie.set(TOKEN_COOKIE, action.payload.token, {expires: 1})
      cookie.set(USER_COOKIE, JSON.stringify(action.payload.user), {expires: 1} )
      return {...state, isLoggedIn: true, user: action.payload.user}

    case actionTypes.LOGOUT:
      cookie.remove(TOKEN_COOKIE)
      cookie.remove(USER_COOKIE)
      return {...state, isLoggedIn: false, user: null}
  
    case actionTypes.TOGGLE_WALLET:
      return {
        ...state,
        isOpenWallet: !state.isOpenWallet,
      }
      
    case actionTypes.CHANGE_BALANCE:
      return {
        ...state,
        isBalanceChange: !state.isBalanceChange,
      }
    
      case actionTypes.UPDATE_BALANCE:
        console.log(action.payload)
        return {
          ...state,
          balanceANT: action.payload,
        }

    default:
      return state
  }
}

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
