const defaultState = {
    debtCard: []
}

export const FETCH_DEBT_CARD = 'FETCH_DEBT_CARD'
export const SET_DEBT_CARD = 'SET_DEBT_CARD'
export const RESET = 'RESET'

export const debtCardReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_DEBT_CARD: 
            return {...state, debtCard: action.payload}
        case RESET: 
            return defaultState
        default: 
            return state
    }
}

export const fetchDebtCardAction = () => ({type: FETCH_DEBT_CARD})
export const resetDebtCard = () => ({type: RESET})
export const setDebtCardAction = (payload) => ({type: SET_DEBT_CARD, payload})