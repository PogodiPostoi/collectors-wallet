import { put, call, takeEvery } from 'redux-saga/effects'
import { FETCH_DEBTORS, setDebtorsAction, fetchDebtorsAction } from './debtorsReducer'

const fetchDebtorsListFromApi = () => {
    return fetch('https://642fe3bec26d69edc885f1d9.mockapi.io/debtorslist')
}

function* fetchDebtorsListWorker() {
    const data = yield call(fetchDebtorsListFromApi)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setDebtorsAction(json))  
}

export function* debtorsListWatcher() {
    yield takeEvery(FETCH_DEBTORS, fetchDebtorsListWorker)
}


