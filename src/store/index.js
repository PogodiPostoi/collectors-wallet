import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { debtorsReducer } from '../saga/debtorsReducer'
import { rootWatcher } from '../saga'
import { debtCardReducer } from '../saga/debtCardReducer'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    debtors: debtorsReducer,
    debtCard: debtCardReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)