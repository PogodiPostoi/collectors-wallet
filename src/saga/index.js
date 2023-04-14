import { all } from 'redux-saga/effects'
import { debtorsListWatcher } from './debtorsListSaga'

export function* rootWatcher() {
    yield all([debtorsListWatcher()])
}