import { fork, all } from 'redux-saga/effects';
import { mainSaga as game } from './game';

export default function* rootSaga() {
  yield all([fork(game)]);
}
