import * as actions from '../actions';
import {
  handleActions
} from 'redux-actions';

const initialGame = {
  gaming: false,
  dealerHand: [],
  playerHand: [],
  drawnCards: [],
  gameLoading: false,
  loading: false,
  choosing: false,
  checkPoint: false,
  finished: false,
  error: false,
  header: '',
  description: '',
};

const game = handleActions({
  [actions.start]: () => {
    return { ...initialGame,
      gaming: true
    }
  },
  [actions.loadGame]: state => {
    return {
      ...state,
      gameLoading: true,
    }
  },
  [actions.addPlayerHand]: (state, action) => {
    return {
      ...state,
      playerHand: [...state.playerHand, action.payload.id]
    }
  },
  [actions.addDealerHand]: (state, action) => {
    return {
      ...state,
      dealerHand: [...state.dealerHand, action.payload.id]
    }
  },
  [actions.addDrawnCard]: (state, action) => {
    return {
      ...state,
      drawnCards: [...state.drawnCards, action.payload.id]
    }
  },
  [actions.selectHitOrStand]: state => {
    return {
      ...state,
      choosing: true,
      loading: false
    }
  },
  [actions.onSelect]: state => {
    return {
      ...state,
      choosing: false
    }
  },
  [actions.onFinish]: state => {
    return {
      ...state,
      finished: true
    }
  },
  [actions.onError]: state => {
    return {
      ...state,
      error: true
    }
  },
  [actions.checkPoint]: state => {
    return {
      ...state,
      checkPoint: true
    }
  },
  [actions.win]: state => {
    return {
      ...state,
      header: 'Congratulations!',
      description: '勝利しました！',
    };
  },
  [actions.lose]: state => {
    return {
      ...state,
      header: 'You Lost!',
      description: '負けました。',
    };
  },
  [actions.draw]: state => {
    return {
      ...state,
      header: 'DRAW',
      description: '引き分けです。',
    };
  },
  [actions.loading]: state => {
    return {
      ...state,
      loading: true
    }
  },
  [actions.initialize]: () => {
    return initialGame;
  }
}, initialGame);


export default game;