import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_ACTION_SAGA } from './actions';

export function* rootWatcherSaga() {
  yield takeEvery(FETCH_ACTION_SAGA, workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put({ type: 'SET_DATA', payload });
  } catch (e) {
    yield put({ type: 'API_ERRORED', payload: e });
  }
}

function getData() {
  return fetch('').then((response) => response.json());
}
