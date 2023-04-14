const defaultState = {
    debtors: []
}

export const FETCH_DEBTORS = 'FETCH_DEBTORS'
export const SET_DEBTORS = 'SET_DEBTORS'

export const debtorsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_DEBTORS: 
            return {...state, debtors: action.payload}
        default:
            return state
    }
}

export const setDebtorsAction = (payload) => ({type: SET_DEBTORS, payload})
export const fetchDebtorsAction = () => ({type: FETCH_DEBTORS})