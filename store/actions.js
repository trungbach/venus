export const actionTypes = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    TOGGLE_WALLET: 'TOGGLE_WALLET',
    CHANGE_BALANCE: 'CHANGE_BALANCE',
    UPDATE_BALANCE: 'UPDATE_BALANCE',
}

export const login = (payload) => {
    return { type: actionTypes.LOGIN, payload }
}
  
export const logout = () => {
    return { type: actionTypes.LOGOUT }
}

export const toggleWallet = () => {
    return { type: actionTypes.TOGGLE_WALLET }
}
  
export const changeBalance = () => {
    return { type: actionTypes.CHANGE_BALANCE }
}
  
export const updateBalanceANT = (payload) => {
    return { type: actionTypes.UPDATE_BALANCE, payload }
}
  
  
  
