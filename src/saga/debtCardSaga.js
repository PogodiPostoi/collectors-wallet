import { put, call, takeEvery } from 'redux-saga/effects'
import { FETCH_DEBT_CARD, setDebtCardAction } from './debtCardReducer'

const fetchDebtCardFromApi = () => {
    return fetch('https://642fe3bec26d69edc885f1d9.mockapi.io/debtCard')
}

function* fetchDebtCardWorker() {
    const data = yield call(fetchDebtCardFromApi)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setDebtCardAction(json))
}

export function* debtCardWatcher() {
    yield takeEvery(FETCH_DEBT_CARD, fetchDebtCardWorker)
}