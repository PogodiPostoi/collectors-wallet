const defaultState = {
    debtCard: []
}

export const FETCH_DEBT_CARD = 'FETCH_DEBT_CARD'
export const SET_DEBT_CARD = 'SET_DEBT_CARD'

export const debtCardReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_DEBT_CARD: 
            return {...state, debtCard: action.payload}
        default: 
            return state
    }
}

export const fetchDebtCardAction = () => ({type: FETCH_DEBT_CARD})
export const setDebtCardAction = (payload) => ({type: SET_DEBT_CARD, payload})