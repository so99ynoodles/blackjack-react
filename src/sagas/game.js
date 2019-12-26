import {
  select,
  put,
  delay,
  takeEvery,
  all,
  call
} from 'redux-saga/effects';
import {
  START_ASYNC,
  ON_HIT,
  ON_CONTINUE,
  ON_CANCEL,
  start,
  loadGame,
  addPlayerHand,
  addDealerHand,
  addDrawnCard,
  selectHitOrStand,
  onSelect,
  ON_STAND,
  checkPoint,
  lose,
  win,
  draw as tie,
  onFinish,
  initialize,
  loading,
  onError,
} from '../actions';
import {
  getCard as api
} from '../api';
import {
  BLACKJACK_POINT,
  KING,
  QUEEN,
  JACK,
  DEALER_LIMIT,
  CONSIDER_ACE_AS_ELEVEN,
  ACE_IS_ELEVEN,
  PICTURE_CARD_VALUE
} from '../common/const';

function* delaySecondsForUX(num = 1) {
  const SECOND = 1000;
  yield delay(num * SECOND);
}

export function* startAsync() {
  yield put(loadGame());
  yield call(delaySecondsForUX);
  yield put(start());

  yield call(dealCards);
  yield call(checkPlayerResult);
}

export function* onHit() {
  yield put(onSelect());
  yield call(drawPlayer);
  yield call(checkPlayerResult);
}

export function* onStand() {
  yield put(onSelect());
  yield call(checkDealerResult);
}

export function* onCancel() {
  yield put(initialize());
}

export function* onContinue() {
  yield call(startAsync);
}

export function* draw() {
  yield put(loading());
  const drawnCards = yield select(state => state.game.drawnCards);
  const {
    payload,
    error
  } = yield call(api, drawnCards);
  yield call(delaySecondsForUX);
  if (error) {
    yield put(onError());
  } else {
    yield put(addDrawnCard(payload));
  }
  return {
    payload,
    error,
  };
}

export function* drawPlayer() {
  const {
    payload
  } = yield call(draw);
  yield put(addPlayerHand(payload));
}

export function* drawDealer() {
  const {
    payload
  } = yield call(draw);
  yield put(addDealerHand(payload));
}

export function* checkResult() {
  const {
    dealerHand,
    playerHand
  } = yield select(state => state.game);
  yield put(checkPoint());
  yield call(delaySecondsForUX, 2);
  const dealerPoint = getTotalValueOfCards(dealerHand);
  const playerPoint = getTotalValueOfCards(playerHand);

  if (playerPoint > BLACKJACK_POINT) {
    yield put(lose());
  } else if (dealerPoint > BLACKJACK_POINT) {
    yield put(win());
  } else if (dealerPoint === playerPoint) {
    yield put(tie());
  } else if (playerPoint > dealerPoint) {
    yield put(win());
  } else {
    yield put(lose());
  }
  yield put(onFinish());
}

export function* checkPlayerResult() {
  const {
    playerHand
  } = yield select(state => state.game);
  const total = getTotalValueOfCards(playerHand);
  if (total > BLACKJACK_POINT) {
    yield call(checkResult);
  } else if (total === BLACKJACK_POINT) {
    yield call(checkDealerResult);
  } else {
    yield put(selectHitOrStand());
  }
}

export function* checkDealerResult() {
  const {
    dealerHand
  } = yield select(state => state.game);
  if (getTotalValueOfCards(dealerHand) >= DEALER_LIMIT) {
    yield call(delaySecondsForUX);
    yield call(checkResult);
  } else {
    yield call(drawDealer);
    yield call(checkDealerResult);
  }
}

const getValueOfCard = id => {
  const value = id % 13;
  if (value === KING || value === QUEEN || value === JACK) return PICTURE_CARD_VALUE;
  else return value;
};

const getTotalValueOfCards = cards => {
  const card = (cards || []).reduce(
    (acc, id) => {
      const value = getValueOfCard(id);
      acc.total += value;
      if (!acc.ace && value === 1) acc.ace = true;
      return acc;
    }, {
      total: 0,
      ace: false,
    },
  );
  if (card.ace && card.total < CONSIDER_ACE_AS_ELEVEN) {
    card.total = card.total + ACE_IS_ELEVEN;
  }
  return card.total;
};

export function* dealCards() {
  yield call(drawPlayer);
  yield call(drawDealer);
  yield call(drawPlayer);
  yield call(drawDealer);
}

export function* mainSaga() {
  yield all([
    takeEvery(START_ASYNC, startAsync),
    takeEvery(ON_HIT, onHit),
    takeEvery(ON_STAND, onStand),
    takeEvery(ON_CONTINUE, onContinue),
    takeEvery(ON_CANCEL, onCancel),
  ]);
}