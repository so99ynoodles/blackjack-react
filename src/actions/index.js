import {
  createAction
} from 'redux-actions';

/* Game */
export const INITIALIZE = 'INITIALIZE';
export const START = 'START';
export const START_ASYNC = 'START_ASYNC';
export const LOAD_GAME = 'LOAD_GAME';
export const DRAW_CARD = 'DRAW_CARD';
export const ADD_DRAWN_CARD = 'ADD_DRAWN_CARD';
export const ADD_DEALER_HAND = 'ADD_DEALER_HAND';
export const ADD_PLAYER_HAND = 'ADD_PLAYER_HAND';
export const END_GAME = 'END_GAME';
export const STOP_GAME = 'STOP_GAME';
export const CHECK_POINT = 'CHECK_POINT';
export const SELECT_HIT_OR_STAND = 'SELECT_HIT_OR_STAND';
export const ON_HIT = 'ON_HIT';
export const ON_STAND = 'ON_STAND';
export const ON_CONTINUE = 'ON_CONTINUE';
export const ON_CANCEL = 'ON_CANCEL';
export const ON_SELECT = 'ON_SELECT';
export const ON_FINISH = 'ON_FINISH';
export const ON_ERROR = 'ON_ERROR';
export const LOADING = 'LOADING';
export const WIN = 'WIN';
export const LOSE = 'LOSE';
export const DRAW = 'DRAW';

export const initialize = createAction(INITIALIZE);
export const start = createAction(START);
export const startAsync = createAction(START_ASYNC);
export const loadGame = createAction(LOAD_GAME);
export const drawCard = createAction(DRAW_CARD);
export const addDrawnCard = createAction(ADD_DRAWN_CARD);
export const addDealerHand = createAction(ADD_DEALER_HAND);
export const addPlayerHand = createAction(ADD_PLAYER_HAND);
export const checkPoint = createAction(CHECK_POINT);
export const endGame = createAction(END_GAME);
export const stopGame = createAction(STOP_GAME);
export const selectHitOrStand = createAction(SELECT_HIT_OR_STAND);
export const onHit = createAction(ON_HIT);
export const onStand = createAction(ON_STAND);
export const onContinue = createAction(ON_CONTINUE);
export const onCancel = createAction(ON_CANCEL);
export const onSelect = createAction(ON_SELECT);
export const onError = createAction(ON_ERROR);
export const win = createAction(WIN);
export const lose = createAction(LOSE);
export const draw = createAction(DRAW);
export const onFinish = createAction(ON_FINISH);
export const loading = createAction(LOADING);