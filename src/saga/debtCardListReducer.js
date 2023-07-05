const defaultState = {
    debtCardList: []
}

export const SET_DEBT_CARD_LIST = 'SET_DEBT_CARD_LIST'

export const debtCardListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_DEBT_CARD_LIST: 
            return {...state, debtCardList: action.payload}
        default: 
            return state
    }
}

export const setDebtCardListAction = (payload) => ({type: SET_DEBT_CARD_LIST, payload})