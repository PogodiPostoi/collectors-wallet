import { all } from 'redux-saga/effects'
import { debtorsListWatcher } from './debtorsListSaga'
import { debtCardWatcher } from './debtCardSaga'

export function* rootWatcher() {
    yield all([debtorsListWatcher(), debtCardWatcher()])
}